const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    speciality: { type: String ,required:true},
    rates:{type:Number ,required:true  },
    starting: { type: String,required:true   },
    ending: { type: String ,required:true  },
    hospital:{type:mongoose.Schema.Types.ObjectId,ref :"clinic"}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;