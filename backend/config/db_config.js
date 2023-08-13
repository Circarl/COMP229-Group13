const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/SurveyApp");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(`DB ERR: ${error.message}`);
  }
};

module.exports = dbConnect;
