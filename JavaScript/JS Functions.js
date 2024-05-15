console.log("Thi is tutorial for functions of javascript");

function greet(name, greetText = "Greetings from javascript") {
  console.log(greetText + " " + name);
  console.log(name + " is a good boy");
}
function sum(a, b, c) {
  let d = a + b + c;
  return d;
  // This line will never execute
  //   console.log("Function is returned")
}

let name = "Akshad";
let name1 = "Kunal";
let name2 = "Jayesh";
let name3 = "Tejas";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
// let returnVal=greet(name3);
// console.log(returnVal);

let returnVal = sum(5, 5, 5);
console.log(returnVal);
// console.log(name0 + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
