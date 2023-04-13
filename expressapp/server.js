const express = require("express");
let server = express();

server.use(express.static("public"));
server.set('view engine', 'ejs');

server.get("/",(req, res)=>{
    res.send("home");
});

server.get("/about.html", (req, res) => {
  res.render('about');
});

server.get("/contact.html", (req, res) => {
  res.send("contact");
});

let port = 3000;
server.listen(port, ()=>{
console.log("listing on port: ", port);
});