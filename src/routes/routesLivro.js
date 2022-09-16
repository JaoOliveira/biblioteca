const express = require("express");
const livrosController = require ('../controller/livrosController.js');

const router = express.Router();

router
    .get("/livros",livrosController.buscarLivros)
    .get("/livros/autor",livrosController.buscarLivrosAutor)
    .get("/livros/editora",livrosController.buscarLivrosEditora)
    .post("/livros", livrosController.cadastrarLivros)  
    .put("/livros/:id",livrosController.atualizarLivro)
    .delete("/livros/:id",livrosController.deletarLivros)

module.exports = router;