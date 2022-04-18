const express = require("express");
var mysql = require("mysql");

const app = express();
const port = 3000;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bd_redes2",
  port: 3306,
});

app.get("/", (req, res) => {
  res.send("API Connection! Redes2");
});

/**
 * Endpoint que obtiene lista de Administradores
 */
app.get("/getadmins", (req, res) => {
  let query = "SELECT * FROM administrador;";
  connection.query(query, (error, result) => {
    if (error) {
      console.log("Error al correr consulta:", error);
      res.send({ flag: false, msg: error });
    } else {
      let jsonres = { data: result, flag: true, msg: "Consulta correcta" };
      res.send(jsonres);
    }
  });
});

/**
 * Endpoint que obtiene lista de desarrolladores
 */
app.get("/getdevs", (req, res) => {
  let query = "SELECT * FROM desarrollador;";
  connection.query(query, (error, result) => {
    if (error) {
      console.log(error);
      res.send({ flag: false, msg: error });
    } else {
      let jsonres = { data: result, flag: true, msg: "Consulta correcta" };
      res.send(jsonres);
    }
  });
});

/**
 * Endpoint que ontiene lista de imagenes
 */
app.get("/getimages", (req, res) => {
  let query = "SELECT * FROM imagen;";
  connection.query(query, (error, result) => {
    if (error) {
      connection.log(error);
      res.send({ flag: false, msg: error });
    } else {
      let jsonres = { data: result, flag: true, msg: "Consulta correcta" };
      res.send(jsonres);
    }
  });
});

app.post("/addadmin", (req, res) => {
  let body = rea.body;
});

app.listen(port, () => {
  console.log(`API app listening on port ${port}`);
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to Database!");
  });
});
