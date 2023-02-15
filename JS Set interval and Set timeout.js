// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Javascript set timeout and clear timeout</title>
//   </head>
//   <body>
//     <div class="container">Time now is <span id="time"></span></div>
//     <script>
      console.log("This is tutorial for set timeout and clear timeout");
      // settimeout--> allows us to run the function once after the interval of time
      // cleartimeout--> allows us to run the function repeatedly after the interval of time

      function greet(name, byeText) {
        console.log("Hello Good Morning " + name + "" + byeText);
      }
      timeOut =setTimeout(greet, 2000,"Akshad"," take care");
      console.log(timeOut);

      clearTimeout(timeOut);

      intervalId=setInterval(greet, 1000,'Akshad', ' Take care');
      clearInterval(intervalId);

      function displayTime() {
        time = new Date();
        console.log(time);
        document.getElementById("time").innerHTML = time;
      }
      setInterval(displayTime, 1000);
//     </script>
//   </body>
// </html>
