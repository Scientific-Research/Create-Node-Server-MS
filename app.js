const http = require("http");

// function rqListener(req, res) {}
// http.createServer(function rqListener(req, res) {});
// http.createServer(function (req, res) {});
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  //process.exit();
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    // res.write("<head><title>Enter Message:</title></head>");
    res.write(
      "<body>\n" +
        "<h1>Enter your message in below field:</h1>\n" +
        '<form action="/message" method="POST">\n' +
        '<input type="text" name="message">\n' +
        '<button type="submit">Send</button>\n' +
        "</form>\n" +
        "</body>\n"
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
