const inventory = {
  laptop:   { price: 999, stock: 5 },
  mouse:    { price: 25,  stock: 10 },
  keyboard: { price: 75,  stock: 0 },  // Out of stock
  monitor:  { price: 299, stock: 3 }
};

function checkInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const outOfStock = items.find(item => !inventory[item] || inventory[item].stock === 0);
      if (outOfStock) {
        reject(new Error(`"${outOfStock}" is out of stock`));
      } else {
        resolve(items);
      }
    }, 500);
  });
}

function calculateTotal(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const subtotal = items.reduce((sum, item) => sum + inventory[item].price, 0);
      const tax   = parseFloat((subtotal * 0.08).toFixed(2));
      const total = parseFloat((subtotal + tax).toFixed(2));
      resolve({ subtotal, tax, total });
    }, 200);
  });
}

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve({
          transactionId: `TXN-${Date.now()}`,
          amount,
          status: "success"
        });
      } else {
        reject(new Error("Payment processing failed. Please try again."));
      }
    }, 1500);
  });
}

function updateInventory(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      items.forEach(item => inventory[item].stock--);
      const updated = items.reduce((acc, item) => {
        acc[item] = inventory[item].stock;
        return acc;
      }, {});
      resolve({ message: "Inventory updated", stockRemaining: updated });
    }, 300);
  });
}

function checkout(itemNames) {
  let checkedItems, pricing;

  return checkInventory(itemNames)
    .then(items => {
      checkedItems = items;
      return calculateTotal(items);
    })
    .then(priceInfo => {
      pricing = priceInfo;
      return processPayment(priceInfo.total);
    })
    .then(payment => {
      return updateInventory(checkedItems).then(invUpdate => ({
        items: checkedItems,
        ...pricing,
        transaction: payment,
        inventory: invUpdate
      }));
    });
}

// Test cases:
checkout(['laptop', 'mouse'])
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop'])
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));