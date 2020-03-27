const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const users = require("./users");
const api = require("./api");
const app = express();

app.engine("handlebars", hbs({ defaultLayout: "main" }));
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
      req.protocol + "://" + req.get("host") + req.originalUrl + "o-aplikacji"
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

app.listen(process.env.PORT || 80, function() {
  console.log("Serwer został uruchomiony pod adresem https://localhost:80");
});
