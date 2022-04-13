const express = require("express");
const cors = require("cors");
require("dotenv").config();


const connect = require("./configs/db");
const clinicController = require("./controllers/clinic.controller");
const doctorController = require("./controllers/doctor.controller");


let app = express();
app.use(express.json());
app.use(cors());
app.use("/clinic", clinicController);
app.use("/doctor", doctorController);


app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log("Running on PORT: ", process.env.PORT,);
  } catch (e) {
    console.log(e.message);
  }
});



