//  <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Working with JSON in javascript</title>
//   </head>
//   <body>
//     <div class="container">This is demo text</div>
//     <script> 
      let jsonObj = {
        name: "Akshad",
        channel: "Githiub",
        username: "akshadjaiswal",
        friend: "KBC",
        car: "Audi",
      };
      console.log(jsonObj);
      let myJsonStr = JSON.stringify(jsonObj);
      console.log(myJsonStr);

      myJsonStr = myJsonStr.replace("Akshad", "Mint");
      console.log(myJsonStr);

      newJsonObj = JSON.parse(myJsonStr);
      console.log(newJsonObj);
//     <!-- </script>
//   </body>
// </html> -->
