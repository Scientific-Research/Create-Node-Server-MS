const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-products", (req, res, next) => {
  console.log("add-product-page");
  res.send(
    '<form action="/product" method="POST">' +
      '<input type="text" name="title">' +
      '<button type="submit">Add Product</button>' +
      "</input>" +
      "</form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
