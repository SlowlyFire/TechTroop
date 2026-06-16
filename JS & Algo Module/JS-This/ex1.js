const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      this.hungry = false;
      console.log('Im no longer hungry!');
    }
  }
};

person.feed(); // logs "Im no longer hungry!"