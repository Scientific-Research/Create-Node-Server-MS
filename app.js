const http = require("http");

// function rqListener(req, res) {}
// http.createServer(function rqListener(req, res) {});
// http.createServer(function (req, res) {});
http.createServer((req, res) => {
  console.log(req);
});
