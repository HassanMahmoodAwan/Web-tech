const { doctor } = require("../models/doctor");
const express = require("express");
const router = express.Router();


// Geting the Data from it
router.get(`/`, async (req, res) => {
  const doctorList = await doctor.find();

  if (!doctorList) {
    res.status(500).json({ success: false });
  }
  res.send(productList);
});


// specific data
router.get(`/:id`, async (req, res) => {
  const doctorList = await doctor.findById(req.params.id)

  if (!doctorList) {
    res.status(500).json({ success: false });
  }
  res.send(doctorList);
});

router.post(`/`, (req, res) => {
  const doctorList = new doctor({
    name: req.body.name,
    speciality: req.body.speciality,
    hospital: req.body.hospital,
  });

  doctorList
    .save()
    .then((createdoctor) => {
      res.status(201).json(createdoctor);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});


// delte 
router.delete("/:id", (req, res) => {
  doctor.findByIdAndRemove(req.params.id)
    .then((doctor) => {
      if (doctor) {
        return res
          .status(200)
          .json({ success: true, message: "the post is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "post not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

router.put("/:id", async (req, res) => {
  const Doctor = await doctor.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      speciality: req.body.speciality,
      hospital: req.body.hospital,
    },
    { new: true }
  );

  if (!Doctor) return res.status(500).send("the product cannot be updated!");

  res.send(Doctor);
});

module.exports = router;
