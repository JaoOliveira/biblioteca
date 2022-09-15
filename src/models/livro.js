const mongoose = require('mongoose');

const livrosSchema = new mongoose.Schema({
    id: {type: String},
    titulo: {type: String, require: true},
    autor: {type: String, require: true},
    editora: {type: String, require: true},
    genero: {type: String, require: true},
    numeroDePaginas: {type: Number, require: true},
    stauts: {type: Boolean},
    
})

const livros = mongoose.model('livros',livrosSchema)

module.exports = livros;