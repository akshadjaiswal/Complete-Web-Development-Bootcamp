// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Date and time in java script</title>
//   </head>
//   <style>
//     .container {
//       font-size: 60px;
//       background-color: cyan;
//       border: 2px solid gray;
//       padding: 60px;
//       margin: auto;
//       text-align: center;
//     }
//     #time {
//       font-weight: bolder;
//     }
//   </style>
//   <body>
//     <div class="container">Cureent time:- <span id="time"> </span></div>
//     <script>
      console.log("this is date and time tutorial");
      // let now = new Date();
      // console.log(now);

      // let dt = new Date(0);
      // console.log(dt);

      // let newDate= new Date("2029-09-30");
      // console.log(newDate);

      // let newDate= new Date(yeaar,month,date,hours,minutes,seconds);
      let newDate = new Date(3698, 4, 6, 5, 6, 8);
      console.log(newDate);

      let yr = newDate.getFullYear();
      console.log("The year is " + yr);

      let dt = newDate.getDate();
      console.log("The date is " + dt);

      let day = newDate.getDay();
      console.log("The day is " + day);

      let mnt = newDate.getMonth();
      console.log("The mnt is " + mnt+1);

      let sec = newDate.getSeconds();
      console.log("The second is " + sec);

      newDate.setDate(5);
      newDate.setMinutes(55);
      console.log(newDate);

      setInterval(updateTime, 1000);

      function updateTime() {
        time.innerHTML = new Date();
      }
//     </script>
//   </body>
// </html>
