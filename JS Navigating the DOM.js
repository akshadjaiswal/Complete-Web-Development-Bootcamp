// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Manipulating DOM JS</title>
//   </head>
//   <body>
//     <div id="main" class="container">
//       <ul id="nav">
//         <li>Home</li>
//         <li>Contact Us</li>
//         <li>About</li>
//         <li>Services</li>
//         <li>More About Us</li>
//       </ul>
//     </div>

//     <div class="container">Another container</div>
//     <script>
let main = document.getElementById("main");
console.log(main);

let nav = document.getElementById("nav");
console.log(nav);

let containers = document.getElementsByClassName("container");
console.log(containers);

//   let sel = document.querySelector("#nav>li");
//   console.log("Selector returns", sel)

let sel = document.querySelectorAll("#nav>li");
console.log("Selector returns", sel);

//     </script>
//   </body>
// </html>
