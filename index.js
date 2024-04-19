const express = require("express");
const connection = require("./connection");
const app = express();
const port = 3000;
const response = require("./response");

// Middleware untuk mengizinkan akses JSON
app.use(express.json());

// Route untuk mendapatkan data dari database
app.get("/", (req, res) => {
  const sql = "SELECT * FROM mahasiswa";
  // Eksekusi query ke database
  connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Internal Server Error");
      return;
    }
    // Mengirim hasil query sebagai respons
    // res.send(results);
    response(200, results, "get all data from mahasiswa", res); // di kirim ke response.js
  });
});

app.get("/find", (req, res) => {
  console.log(`Find NIM : ${req.query.nim}`);
  const sql = `SELECT nama FROM mahasiswa WHERE nim = ${req.query.nim}`;
  connection.query(sql, (error, results) => {
    response(200, results, "find mahasiswa name", res); // di kirim ke response.js
  });
});

// Memulai server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
