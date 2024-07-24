function getNumber() {
  return new Promise(function(resolve, reject) {
    let number = Math.random();
    if (number > 0.5) {
      resolve(number);
    } else {
      reject("Number is too small");
    }
  });
}

getNumber()
  .then(function(result) {
    console.log("Success: " + result);
  })
  .catch(function(error) {
    console.error("Error: " + error);
  });
