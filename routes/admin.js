const express = require("express");

const router = express.Router();

// /admin/add-products => GET
router.get("/add-products", (req, res, next) => {
  console.log("add-product-page");
  res.send(
    '<form action="/admin/add-products" method="POST">' +
      '<input type="text" name="title">' +
      '<button type="submit">Add Product</button>' +
      "</input>" +
      "</form>"
  );
});

// /admin/add-products => POST
router.post("/add-products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
