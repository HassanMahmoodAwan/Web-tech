var express = require("express");
var router = express.Router();
var {Deal} = require("../../models/dealSchema");
var productValidate = require("../../middlewares/productValidate");

// read Operation  (Working)
router.get("/", async function (req, res, next) {
  let page = req.query.page ? req.query.page : 1;
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  var deals = await Deal.find().skip(skipRecords).limit(perPage);
  res.send(deals);
});

// read Specific Record Operation  (working)
router.get("/:id", async function (req, res, next) {
  try {
    var deal = await Deal.findById(req.params.id);
    if (!deal) {
      return res.status(404).send("Product with ID not present");
    }
    res.send(deal);
  } catch (err) {
    return res.status(400).send("ID not Found");
  }
});

// Update the Specific Record of API
router.put("/:id", async function (req, res, next) {
  var deal = await Deal.findById(req.params.id);
  deal.Name = req.body.Name;
  deal.Quantity = req.body.Quantity;
  deal.Price = req.body.Price;
  await deal.save();
  return res.send(deal);
});

// Delete the Specific Record of API
router.delete("/:id", async function (req, res, next) {
  var deal = await Deal.findByIdAndDelete(req.params.id);
  return res.send(deal);
});

// post the Specific Record of API
router.post("/", productValidate, async function (req, res, next) {
  // let {error} = validate(req.body);
  // if(error){return res.status(400).send(error)};
  var deal = new Deal();
  deal.Name = req.body.Name;
  deal.Quantity = req.body.Quantity;
  deal.Price = req.body.Price;
  await deal.save();
  return res.send(deal);
});

module.exports = router;
