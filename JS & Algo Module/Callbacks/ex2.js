const getTime = function(fn) {
  const time = new Date();
  fn(time);
};

const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

getTime(returnTime)
