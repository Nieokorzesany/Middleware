var express = require("express");
var app = express();

app.use("/store", function(req, res, next) {
  console.log("Jestem pośrednikiem przy żądaniu do /store");
  next();
});

app.get("/", function(req, res) {
  res.send("hello world");
});

app.get("/store", function(req, res) {
  res.send("to jest sklep");
});

var server = app.listen(3000, "localhost", function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log(
    "Przykładowa aplikacja nasłuchuje na http://" + host + ":" + port
  );
});
app.use(function(req, res, next) {
  res.status(404).send("Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!");
});
