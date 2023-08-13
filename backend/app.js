const express = require("express");
// const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const userRoute = require('./routes/users')
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const app = express();

//database setup

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/SurveyApp");
    } catch (error) {
      console.log(`DB ERR: ${error.message}`);
    }
  };
  
  module.exports = dbConnect;
  
