const fs = require("fs");
//process.exit();

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
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
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        // fs.writeFileSync("message.txt", "DUMMY TEXT");
        res.statusCode = 302;
        res.setHeader("Location", "/"); // this line redirects us to the above if because of url==="/"
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
