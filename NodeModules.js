const fs=require("fs");
let text = fs.readFileSync("sample.txt","utf-8");
text = text.replace("modules","NodeJs");

console.log("The content of the file is:")
console.log(text);

console.log("Creating a new file");
fs.writeFileSync("akshad.txt", text);