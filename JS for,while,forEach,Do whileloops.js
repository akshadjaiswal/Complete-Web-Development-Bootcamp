// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Loops in javascript</title>
//   </head>
//   <body>
//     <div class="container">This is about loops</div>
//     <h2> It is an javascript tutorial so look in the console section for result.</h2>
//     <script>
      console.log("This is tutorial for loops");
      // let i=0;
      // for(i=0;i<3;i++){
      //     console.log(i);
      
      // }

      let friends = ["Akshad", "Jayesh", "Kunal", "Dipanshu", "Harsh","Deep"];
      // for loop
      // for (let index = 0; index < friends.length; index++) {
      //     console.log( " Hello friends, "+friends[index]);
      // }

      // for each loop
      // friends.forEach(function f(element){
      //    console.log("hello Friends, "+ element +" Welcome to mordern javascript")
      // });

      // for of loop
      //    for (element of friends){
      //     console.log("Hello Friends, "+ element +" Welcome to modern javascript again")
      //    }

      let employee = {
        name: "Akshad",
        salary: 2000,
        channel: "github",
        username: "akshumint",
      };
      // use this loop to iterate over javascript
      for (key in employee) {
        console.log(`The ${key} of employee is ${employee[key]} `);
      }

      //  while loop in js
      let i = 0;
      while (i < 4) {
        console.log(`${i} is less than for 4`);
        i++;
      }

      //  do while loop in js
      let j = 34;
      do {
        console.log(`${j} is less than for 4 but we are inside do while loop`);
        i++;
      } while (j < 4);
//     </script>
//   </body>
// </html>
