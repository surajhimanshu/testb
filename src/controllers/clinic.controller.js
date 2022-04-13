const express = require("express");
const Clinic = require("../models/clinic.model");

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const totalClinic = await Clinic.find().populate('doctorid');
    return res.status(200).json({ data: totalClinic });
  } catch (err) {
    return res.status(500).json({ status: "failed", message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const singleClinic = await Clinic.findById(req.params.id).populate('doctorid');;
    return res.status(200).json({ data: singleClinic });
  } catch (err) {
    return res.status(500).json({ status: "failed", message: err.message });
  }
});

module.exports = router;