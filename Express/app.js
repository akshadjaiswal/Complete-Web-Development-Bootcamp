const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// for serving static files
app.use("/static", express.static("static"));

// set the template engine for pug
app.set("view engine", "pug");

//set the views directory
app.set("views",path.join(__dirname, 'views'));

//our pug demo endpoint
app.get("/demo", (req,res)=>{
  res.status(200).render('demo', { title: 'Hey Akshad', message: 'Hello there and we are here using pug in  the express for backend' })

});

app.get("/", (req, res) => {
  res
    .status(200)
    .send("Thsi is home page of  my first express app with Akshad Jaiswal  ");
});

app.get("/about", (req, res) => {
  res.end("Thsi is about page of my first express app with Akshad jaiswal  ");
});

app.post("/about", (req, res) => {
  res.end(
    "Thsi is post request about page of my first express app with Akshad jaiswal  "
  );
});

app.get("/this", (req, res) => {
  res
    .status(404)
    .send("The Page is not found on my website  akshadjaiswal.netlify.com ");
});

app.listen(port, () => {
  console.log(`The application started successfully started on port ${port}`);
});
