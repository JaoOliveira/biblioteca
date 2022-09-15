const express = require("express");
const db = require("./config/dbconnect.js")
const livros = require('./models/livro.js');
const routes = require("./routes/index.js");

db.on("error",console.log.bind(console,'Erro de conexão'))
db.once("open",()=>{
  console.log("Conexão concluida!!!")
})

const app = express();

routes(app);


  module.exports = app;