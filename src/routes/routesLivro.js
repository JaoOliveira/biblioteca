const express = require("express");
const livrosController = require ('../controller/livrosController.js');

const router = express.Router();

router
    .get("/livros",livrosController.buscarLivros)
    .post("/livros", livrosController.cadastrarLivros)
    .put("/livros/:id",livrosController.atualizarLivro)
    .delete("/livros/:id",livrosController.deletarLivros)

module.exports = router;