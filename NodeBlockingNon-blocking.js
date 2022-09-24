// Synchronous or Blocking
// -line by line execution

// Asynchronous or Non-Blocking
// - line by line execution not gaurented
// -callbacks will fire

const fs = require("fs");
fs.readFile("sample.txt", "utf-8", (err, data) => {
  //redaing file assyncronously
  console.log(err, data);
});
console.log("This is a message:-");
