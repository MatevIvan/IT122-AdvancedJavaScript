var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello JS 2 Class - Fall 2024!");
  })
  .listen(8080);
