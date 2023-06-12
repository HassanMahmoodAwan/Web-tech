var mongoose = require("mongoose");
var joi = require("@hapi/joi");

var dealSchema = mongoose.Schema({
  Name: String,
  Quantity: String,
  Price: String,
});

const Deal = mongoose.model("deals", dealSchema);

function validateProduct(data) {
  const schema = joi.object({
    Name: joi.string().min(3).max(20).required(),
    Quantity: joi.string().min(1).max(5).required(),
    Price: joi.string().min(1).max(10).required(),
  });
  return schema.validate(data, { abortEarly: false });
}

module.exports.Deal = Deal;
module.exports.validate = validateProduct;
