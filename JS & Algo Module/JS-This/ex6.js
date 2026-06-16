const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    const required = this.drinkRequirements[drinkType];

    if (required === undefined) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }

    if (this.beans < required) {
      console.log("Sorry, we're all out of beans!");
      return;
    }

    this.beans -= required;
    console.log("Here's your " + drinkType + "! Beans remaining: " + this.beans);
  }
};

coffeeShop.makeDrink("latte");        // 30 beans left
coffeeShop.makeDrink("americano");    // 25 beans left
coffeeShop.makeDrink("filtered");     // "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");   // 10 beans left
coffeeShop.makeDrink("frenchPress");  // "Sorry, we're all out of beans!"