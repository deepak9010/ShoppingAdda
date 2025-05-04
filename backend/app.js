const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

const errorMiddleware = require("./middleware/error");

// config
dotenv.config({ path: "./config/config.env" });
// ✅ CORS setup goes here — before all routes
app.use(cors({
  // origin: "http://localhost:3000",
  origin: ["http://localhost:3000", "https://ecommerce-frontend-iota-azure.vercel.app"],
  // origin : "*",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");


app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1", payment);


// Middleware for errors
app.use(errorMiddleware);

module.exports = app;