const express = require("express"),
  app = express(),
  port = process.env.port || 3000;
(routes = require("./routes.js")),
  (mongoose = require("mongoose")),
  (User = require("./models/UserModels"));
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

mongoose.connect("mongodb://localhost/users_db");
const swaggerOption = {
  swaggerDefinition: {
    info: {
      version: "1.1.0",
      title: "Api for users",
      description: "users",
      servers: ["http://localhost:3000/"],
    },
  },
  apis: ["./routes.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOption);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
routes(app);
app.listen(port);
