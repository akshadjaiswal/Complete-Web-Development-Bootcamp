// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Javascript String functions</title>
//   </head>
//   <body>
//     <script>
var str = "This is a string";
console.log(str);

//first occurence of a substring
var position = str.indexOf("is"); //index funtion
console.log(position);

//first occurence of a substring
position = str.lastIndexOf("is"); //index function
console.log(position);

//substring fro a string
var substr = str.slice(1, 6); //extacting from string slice  function
var substr = str.substring(1, 6);

var substr1 = str.substr(1, 2);
console.log(substr1); //extracting from string substr function

var replace = str.replace("string", "Akshad");
console.log(str);
console.log(replace); //replace function

console.log(str.toUpperCase());
console.log(str.toLowerCase()); //upper/lower case function

var newString = str.concat(" New String"); //concat function
console.log(newString);

var strWithWhiteSpaces = "   this    contains     whitespaces";
console.log(strWithWhiteSpaces);
console.log(strWithWhiteSpaces.trim()); //white space remove function with trim

var char2 = str.charAt(2); //charAt function
console.log(char2);

console.log(str[8]);
//     </script>
//   </body>
// </html>
