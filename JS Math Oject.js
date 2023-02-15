// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Math Object</title>
//   </head>
//   <body>
//     <div class="container"><h1>Math Object</h1></div>
//     <script>
      //printing the math object
      let m = Math;
      console.log(m);

      //printing the constraints from the math object
      console.log("The value of Math.E  is ", Math.M);
      console.log("The value of Math.LN2  is ", Math.LN2);
      console.log("The value of Math.LN10 is ", Math.LN10);
      console.log("The value of Math.LOG2E  is ", Math.LOG2E);
      console.log("The value of Math.LOG10E  is ", Math.LOG10E);

      //printing the functions from math object
      let a = 34.64945949;
      let b = 58;

      //Round function
      console.log("The value of a abd b is ", a, b);
      console.log(
        "The value of a abd b rounded  is ",
        Math.round(a),
        Math.round(b)
      );

      //Pow function
      console.log("3 raised to the power is 2 is", Math.pow(3, 2));
      console.log("7 raised to the power is 3 is", Math.pow(7, 3));
      console.log("5 raised to the power is 4 is", Math.pow(5, 4));

      //square root function
      console.log("Square rrot of 25 is", Math.sqrt(25));
      console.log("Square rrot of 100 is", Math.sqrt(100));
      console.log("Square rrot of 2600 is", Math.sqrt(2600));

      //ceil and flor function
      console.log("26.6 rounded up to nearest integer is", Math.ceil(26.6));
      console.log(
        "652.65949 rounded down up to nearest integer is",
        Math.floor(652.65949)
      );

      // abs function
      console.log("Absolute value of 5.66", Math.abs(5.66));
      console.log("Absolute value of -5.66", Math.abs(5.66)); //returns positive value

      //ntrignometric function
      console.log("the value of sin(pi)", Math.sin(Math.PI / 2));
      console.log("the value of tan(pi)", Math.tan(Math.PI / 2));
      console.log("the value of cos(pi)", Math.cos(Math.PI / 2));

      // min and max function
      console.log("Minimum value of 4 5 6 is ", Math.min(4, 5, 6));
      console.log("Maximum value of 4 5 6 is ", Math.max(4, 5, 6));

      // generating a random number
      let r = Math.random();
      // R let a:number b/w (a,b)= a+(b-a)*math.random()
      let x = 50;
      let y = 60;
      let r50_60 = x + (y - x) * Math.random();
      console.log("The random is ", r);
      console.log("The random is ", r50_60);
//     </script>
//   </body>
// </html>
