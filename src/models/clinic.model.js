const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema(
  {
    clinicName: { type: String, required: true , unique:true },
    //specialities: [{ type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }],
    doctorid: [{ type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Clinic = mongoose.model("clinic", clinicSchema);

module.exports = Clinic;
