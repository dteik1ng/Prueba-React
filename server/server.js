const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const PORT = 5000;

app.use(cors());

app.get("/api", (req, res) => {
  fs.readFile("sample.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo JSON:", err);
      res.status(500).json({ error: "Error al leer el archivo JSON" });
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor de la API corriendo por el puerto ${PORT}`);
});