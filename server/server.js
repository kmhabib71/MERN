const express = require("express");

const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const { connectDB } = require("./database/connection");
dotenv.config({ path: "config.env" });
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
connectDB(); // Call the connectDB function
app.use(express.json());
const port = 5000;
const indexRoutes = require("./router/router");
app.use("/", indexRoutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
