// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + "/public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});
app.get("/api/whoami", async function (req, res) {
  const headers = req.headers;
  const { "user-agent": userAgent, "accept-language": acceptLanguage } =
    headers;
  const ip = req.ip;
  return res
    .status(200)
    .json({ ipaddress: ip, language: acceptLanguage, software: userAgent });
});
// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, "0.0.0.0", function () {
  console.log("Your app is listening on port " + listener.address().port);
});
