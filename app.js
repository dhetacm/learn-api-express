const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello slash");
});

app.post("/", (req, res) => {
  res.send("Api Air");
});

app.get("/coba_param/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/coba_query", (req, res) => {
  res.send(req.query.air + "" + req.query.tanah);
});

app.post("/coba_body", (req, res) => {
  res.send(req.body.udara);
});

app.listen(3003, () => console.log("server is running"));
