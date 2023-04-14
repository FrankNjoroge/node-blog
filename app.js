const express = require("express");

const app = express();

//register view engine
app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    { title: "Yoshi finds eggs", snippet: "lorem ipsum dolor sit amet" },
    { title: "Mario finds stars", snippet: "lorem ipsum dolor sit amet" },
    { title: "How to win", snippet: "lorem ipsum dolor sit amet" },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "Aboutus" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create New" });
});

//404
app.use((req, res) => {
  res.status(404).render("404", { title: 404 });
});
