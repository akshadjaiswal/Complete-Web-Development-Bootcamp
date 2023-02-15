// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Arrow Functions</title>
//   </head>
//   <body>
//     <div class="container">This is a arrow fucntion</div>
//     <script>

// Arrow function
//  let greet = ()=>{
//   console.log("Good morning ");
//  }

let greet = () => console.log("Good morning ");

//  let sum =(a,b)=>{
//   return a+b;
//  }

let sum = (a, b) => a + b;
let half = (a) => a / 2;

//    function greet(){
//     console.log("Good morning ");
//    }

greet();
setTimeout(() => {
  console.log("we are inside set timeout");
}, 3000);

let obj1 = {
  greeting: "Good Morning",
  names: ["Akshad", "Kunal", "Jayesh", "Tejas"],
  speak() {
    this.names.forEach((student) => {
      console.log(this.greeting + " Welcome to my world " + student);
    });
  },
};
//       obj1.speak();
//     </script>
//   </body>
// </html>
