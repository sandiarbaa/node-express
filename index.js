const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// route utama / endpoint menggunakan method GET
app.get("/", (request, response) => {
  response.send("Main Route");
});

app.get("/hello", (req, res) => {
  // console.log({ urlParam: req.query }); // ini kalau mau semua datanya
  console.log({ urlParam: req.query.name }); // ini kalau mau datanya spesifik
  res.send("Hello World! Hello Dunia!");
});

// kalau menggunakan method POST
app.post("/login", (req, res) => {
  console.log({ requestFromExternalResource: req.body }); // req ini sesuatu yg di dapat dari luar, ex: dari postman

  // jadi ini fungsinya jika kita ingin mengambil datanya spesifik, misal ini contoh ketika ingin validasi
  const username = req.body.username; // ambil user yg dikirim dari api
  if (username === usernameFromDB) {
    // kalau usernamenya ada di database, maka dia boleh login
    res.status(200).send("Login Success!");
  }
  res.send("Login Succes!"); // ini mengirim ke luar sesuatu yg ada di sistem, di sini mengirim string
});

app.put("/username", (req, res) => {
  console.log({ updateData: req.body });
  res.send("Update Succes!");
});

// untuk menjalankan port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
