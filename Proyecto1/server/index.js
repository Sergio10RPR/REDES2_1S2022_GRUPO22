const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors());

const connection = require('./config/connection').connection;

app.get("/", (req, res) => {
  res.send("API Connection! Redes2");
});

/**
 * Endpoint que obtiene lista de Administradores
 */
app.get("/getAdmins", (req, res) => {
  let query = `
  SELECT id_administrador,nombre_admin,descripcion,nombre_rol,link_imagen
  FROM administrador, rol
  WHERE cod_rol = id_rol;
  `;
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
app.get("/getDevs", (req, res) => {
  let query = `
  SELECT id_desarrollador,nombre_dev,carnet,nombre_curso,nombre_rol,descripcion,link_imagen
  FROM desarrollador, curso, rol
  WHERE cod_curso = id_curso
  AND cod_rol = id_rol;
  `;
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
 * Endpoint que obtiene lista de imagenes
 */
app.get("/getImages", (req, res) => {
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

app.post("/addAdmin", (req, res) => {
  let body = req.body;
});

app.listen(port, () => {
  console.log(`API app listening on port ${port}`);
});
