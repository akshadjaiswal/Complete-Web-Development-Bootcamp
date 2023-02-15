//  <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Interaction using alert confirm and prompt</title>
//   </head>
//   <body>
//     <div class="container">This is a page</div>
//     <h3> It is an javascript tutorial so look in the console section for result.</h3>
//     <script>

//Alert in browser javascript-does not return anything
alert("This is a message");

// prompt in js
let name = prompt("What is yoyr name", "Guest");
console.log(name);

//confirm in js
let deletePost = confirm("Do you really want to delete this post ?");
if (deletePost) {
  // code to delete the post
  console.log("your post has been deleted successfully");
} else {
  // code to cancel deletion of the post
  console.log("your post has not been deleted");
}
console.log(deletePost);
//     </script>
//   </body>
// </html>
