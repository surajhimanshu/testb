const express = require("express");
const Doctor = require("../models/doctor.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {

    const totalDoctor = await Doctor.find().populate('hospital');
    return res.status(200).json({ data: totalDoctor });
  } catch (err) {
    return res.status(500).json({ status: "failed", message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const singleDoctor = await Clinic.findById(req.params.id);
    return res.status(200).json({ data: singleDoctor });
  } catch (err) {
    return res.status(500).json({ status: "failed", message: err.message });
  }
});

module.exports = router;