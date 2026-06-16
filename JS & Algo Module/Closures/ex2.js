function Bank() {
  let money = 500; // private variable

  function deposit(cash) {
    money += cash;
  }

  function showBalance() {
    console.log(money);
  }

  return {
    deposit,
    showBalance
  };
}

// Usage:
const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); // prints 950