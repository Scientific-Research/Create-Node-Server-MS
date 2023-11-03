const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(adminRoutes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  res.send("<h1>Page not found!</h1>");
});

app.listen(3000);
