// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Arrays and Objects</title>
//   </head>
//   <body>
//     <div class="container">Dummy html text for just checking live server</div>
//     <h3>
//       It is an javascript tutorial so look in the console section for result.
//     </h3>
//     <script>

let myvar = 34;
let myvar2 = "string";
let myvar3 = true;
let myvar4 = null;
let myvar5 = undefined;

let employee = {
  name: "Akshad",
  salary: 10,
  channel: "Github",
  username: "akshumint",
};
console.log(employee);

//let name=[1,2,4,"Akshad",undefined];
//let name=new Array(41,2,4,"Akshad",undefined);

let name = new Array(23);
console.log(name.length);
name = name.sort();
name.push("this is a pushed");
console.log(name);

//     </script>
//   </body>
// </html>
