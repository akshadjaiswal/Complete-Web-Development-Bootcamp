// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Scope and conditionals</title>
//   </head>
//   <body>
//     <h1>
//       It is an javascript tutorial so look in the console section for result.
//     </h1>
//     <script>
      // scope
      var string1 = "This is a string";
      var string1 = "This is a string1";
      console.log(string1);
      let a="u";
      {
          let a="u2";
      console.log(a);
      }
      console.log(a);

      const b ="This can not be changed";
      b= "I want ot change this. This can not be change"
      console.log(a);

      // if else condition
      let age=5;
      if (age>18){
          console.log("you are eligible for drinking")
      }
      else if (age==2) {
          console.log("Age is 2")
      }
      else if (age==5) {
          console.log("Age is 5")
      }
      else{
         console.log( "you are not eligible for drinking")
      }

      // switch case
      const cups = 477;
      switch (cups) {
        case 4:
          console.log("the value of cups is 4");
          break;
        case 41:
          console.log("the value of cups is 41");
          break;
        case 43:
          console.log("the value of cups is 42");
          break;
        case 44:
          console.log("the value of cups is 44");
          break;
        case 33:
          console.log("the value of cups is 33");
          break;
        case 31:
          console.log("the value of cups is 31");
          break;

        default:
          console.log("the  value of cups is none of 4,41,43,44,33,31");
          break;
      }
//     </script>
//   </body>
// </html>
