const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This is always running!");
  //res.send("sdfsDFsdf");
  next();
});

app.use("/add-products", (req, res, next) => {
  res.send("<h1>The Add Product Page!</h1>");
  console.log("add-product-page");
  // next();
});

app.use("/contact-us", (req, res, next) => {
  res.send("<h1>The Contact Us Page!</h1>");
});

app.use("/", (req, res, next) => {
  console.log('This app.use with "/" must stay always as last Item!...');
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
