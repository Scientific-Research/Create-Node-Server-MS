const http = require("http");
const routes = require("./routes");

console.log(routes.someText);
console.log(routes.handler);

// function rqListener(req, res) {}
// http.createServer(function rqListener(req, res) {});
// http.createServer(function (req, res) {});
// const server = http.createServer((req, res) => {
//   //   console.log(req.url, req.method, req.headers);
// });
const server = http.createServer(routes.handler);
//   console.log(req.url, req.method, req.headers);

server.listen(3000);
