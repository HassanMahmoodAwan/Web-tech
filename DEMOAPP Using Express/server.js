const express = require('express');
let server = express();

server.use(express.static("public"));
server.set('view engine', 'ejs');


// server.get("/", (req, res)=>{
//     res.send("<h1>hello world!</h1>");
// });

server.get("/", (req, res)=>{
    server.render('homepage')
});
server.get("/contact", (req, res)=>{
    server.render('contact')
});

server.listen(4000);