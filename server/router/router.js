const express = require("express");
const route = express.Router();
const authRouter = require("./AuthRouter");
route.use("/api/auth/", authRouter);
module.exports = route;
