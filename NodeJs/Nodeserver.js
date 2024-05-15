const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  // res.end('hello world');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Pseudo Selectors and more designing</title>
      <style>
        .container {
          border: 10px solid rgba(11, 43, 65, 0.148);
          background-color: rgb(151, 163, 120);
          padding: 35px;
          margin: 35px auto;
          width: 666px;
        }
        a {
          text-decoration: none;
          color: black;
        }
        a:hover {
          color: rgb(168, 13, 13);
          background-color: blanchedalmond;
        }
        a:visited {
          background-color: rgb(122, 124, 82);
        }
        a:active {
          background-color: lightcoral;
        }
        .btn {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background-color: rgb(128, 185, 183);
          padding: 6px;
          border: none;
          cursor: pointer;
          font-size: 13px;
          border-radius: 4px;
        }
        .btn:hover {
          background-color: chartreuse;
          border: 2px solid black;
        }
      </style>
    </head>
    <body>
      <div class="container" id="cont1">
        <h3>This is my heading</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quibusdam
          iste optio harum illo blanditiis facilis in, nostrum aliquid velit ea
          tempore quia delectus quaerat cupiditate sed doloribus cumque atque modi
          nulla? Odio, ducimus asperiores?
        </p>
        <a href="https://yahoo.com" class="btn">Read more</a>
        <button class="btn">Contact us</button>
      </div>
    </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
