const express = require("express");
const app = express();
const port = 3000;

// route utama / endpoint menggunakan method GET
app.get("/", (request, response) => {
  response.send("Main Route");
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// kalau menggunakan method POST
app.get("/login", (req, res) => {
  if (req.name === "Sandi") {
    res.send("Login Succes!");
  }
});

// untuk menjalankan port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
