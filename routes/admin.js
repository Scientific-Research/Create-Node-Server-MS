const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-products => GET
router.get("/add-product", (req, res, next) => {
  console.log("add-product-page");
  //   res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-products => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
