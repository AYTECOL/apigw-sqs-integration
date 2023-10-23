"use strict";
const serverlessExpress = require('@vendia/serverless-express');
const express = require("express");
const cors = require("cors");
const app = express();
const api = require("./routes.js");

// Middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

// route
app.use("", api);


module.exports.handler = serverlessExpress({ app });
