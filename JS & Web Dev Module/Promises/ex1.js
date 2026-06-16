function checkLuckyNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num <= 0) {
        reject(new Error("Invalid number"));
      } else if (num % 7 === 0) {
        resolve("Lucky!");
      } else {
        resolve("Not lucky");
      }
    }, 800);
  });
}

// Test it:
checkLuckyNumber(14).then(console.log);  // "Lucky!"
checkLuckyNumber(5).then(console.log);   // "Not lucky"
checkLuckyNumber(-3).catch(e => console.log(e.message)); // "Invalid number"