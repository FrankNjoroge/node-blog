const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  // res.send("<h1>Semaje budaaaa</h1>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("<h1>Semaje budaaaa</h1>");
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404
app.use((req, res) => {
  res.statusCode = 404;
  res.sendFile("./views/404.html", { root: __dirname });
});
