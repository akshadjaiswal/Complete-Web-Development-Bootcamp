const express = require("express");
const path = require("path");
const { title } = require("process");
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); // for serving static files

//PUG SPECIFIC STUFF
app.set("view engine", "pug"); // set the template engine for pug
app.set("views", path.join(__dirname, "views")); //set the views directory

//ENDPOINTS
app.get('/',(req,res)=>{
  const con="This is the best content surf on thje internet so far so use it "
  const params={'title': 'Pubg is the best game',content: con}
    res.status(200).render('index.pug', params);
})


//start the server
app.listen(port, () => {
  console.log(`The application started successfully started on port ${port}`);
});
