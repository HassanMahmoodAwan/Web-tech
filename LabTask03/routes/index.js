var express = require('express');
var router = express.Router();
var User = require("../models/userSchema");
var bcrypt = require("bcryptjs");
var prod = require("../models/productSchema");

/* GET home page. */
router.get('/', async function(req, res, next) {
  let product = await prod.find();
  res.render('index', { title: 'Watches', product });
});

router.get('/contactUs', function(req, res, next) {
  res.render('contactUs', { title: 'Contact Us' });
});


// Cart
router.get("/cart", function (req, res, next) {
  let cart = req.cookies.cart;
  if (!cart) { cart = []; }
  res.render("cart", { title: "Cart", cart})
});



// User Routes  (Register)
router.get("/Register", function (req, res, next) {
  res.render("Users/register", { title: "Register" });
});

router.post("/Register", async function (req, res, next) {
  let user = new User(req.body);
   const salt = await bcrypt.genSalt(10);
   user.password = await bcrypt.hash(req.body.password, salt);
  await user.save();
  res.redirect("/");
});

// User Routes  (Login)
router.get("/Login", function (req, res, next) {
  res.render("Users/login", { title: "login" });
});
router.get("/Logout", function (req, res, next) {
  req.session.user = null;
  res.redirect("/Login");
});



router.post("/Login", async function (req, res, next) {
  let user = await User.findOne({email: req.body.email})
  if(!user) {return res.redirect("/Register")}
  else{
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
     if (validPassword) {
    req.session.user = user;
    
    return res.redirect("/");
  } else {
    
    return res.redirect("/login");}

    
  }
});


module.exports = router;
