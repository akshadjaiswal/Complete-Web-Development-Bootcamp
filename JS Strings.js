// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Strings in javascript</title>
//   </head>
//   <body>
//     <div class="container">
//       <h1>Happy birthday Akshad</h1>
//       <div id="content"></div>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
//         repellendus eos ullam voluptatibus perferendis. Cum laboriosam ipsum
//         nesciunt quaerat rem delectus id velit quis? Maxime cumque temporibus
//         iusto officia eius sed dicta eaque adipisci.
//       </p>
//     </div>
//     <script>
      //var string="this";
      var string = "this ";
      var name = "Akshad";
      var github = "akshadjaiswal";
      var message = "Akshad is a programmer";
      var temp = `${name} is a nice person and has a github account with username ${github}`;
      //console.log(string+name+message);
      // console.log(temp);
      // var len=name.length;
      // console.log(`Length of the name is ${len}`)
      console.log("Hello Akshad\n Happy to see you\tand\b");

      var y = new String("this");
      console.log(y);

      document.getElementById("content").innerHTML =
        "<h3> This is an h3 heading <h3/>";
//     </script>
//   </body>
// </html>
