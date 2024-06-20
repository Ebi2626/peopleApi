const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const users = require("./users");
const api = require("./api");
const app = express();
const cors = require('cors');

app.use(cors());
app.engine("handlebars", hbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/api", api);

app.get("/", function(req, res) {
  res.render("home", {
    main: true,
    title: "People API",
    users: users.list(),
    next:
      req.protocol + "://" + req.get("host") + req.originalUrl + "o-aplikacji",
    demo: req.protocol + "://" + req.get("host") + req.originalUrl + "demo"
  });
});
app.get("/o-aplikacji", function(req, res) {
  const beforeUrl = (
    req.protocol +
    "://" +
    req.get("host") +
    req.originalUrl
  ).replace("/o-aplikacji", "");
  res.render("o-aplikacji", {
    oAplikacji: true,
    title: "O aplikacji",
    before: beforeUrl
  });
});
app.get("/demo", function(req, res) {
  const url = req.protocol + "://" + req.get("host");
  const beforeUrl = (url + req.originalUrl).replace("/demo", "");
  res.render("demo", {
    url: url,
    demo: true,
    title: "Demo",
    before: beforeUrl
  });
});

app.listen(process.env.PORT || 80, function() {
  console.log("Serwer został uruchomiony");
});
