const express = require("express");

const router = express.Router();

router.get("/add-products", (req, res, next) => {
  console.log("add-product-page");
  res.send(
    '<form action="/product" method="POST">' +
      '<input type="text" name="title">' +
      '<button type="submit">Add Product</button>' +
      "</input>" +
      "</form>"
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
