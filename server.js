const dotenv = require("dotenv");
dotenv.config({ path: "./backend/config/config.env" }); // Load environment variables first

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const userRoute = require('./backend/routes/users');

const app = express();

app.use(cors());
app.use("/api/users", userRoute);
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // Update with the correct URL
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

var debug = require("debug")("comp229-group13project:server");
const dbConnect = require("./backend/config/db_config");

console.log("DB_MONGODB_URI:", process.env.DB_MONGODB_URI);
console.log("PORT:", process.env.PORT);

/**
 * Get port from environment and store in Express.
 */

const PORT = process.env.PORT;
const MODE = process.env.NODE_ENV;

dbConnect();
/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} on ${MODE} mode`);
});
