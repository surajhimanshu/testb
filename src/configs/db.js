const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL || 80;

module.exports = () => {
  return mongoose.connect(DB_URL);
};