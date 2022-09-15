const livros = require('../models/livro.js')

class livrosController{
    // fazer busca de todos os livros 
    static buscarLivros = (req,res)=>{
        livros.find((err,livros)=>{
            res.status(200).json(livros)
        })
    }
    //cadastrar livro
    static cadastrarLivros = (req, res)=>{
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err){
                res.status(500).send({message:`${err.message} - Falha ao cadastrar livro.`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }
    // atualizar livro por id
    static atualizarLivro = (req,res)=>{
        const id = req.params.id;

        livros.findByIdAndUpdate(id,{$set: req.body},(err)=>{
            if(!err){
                res.status(200).send({message: 'Livro Atualizado'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
    // deletar livro por id
    static deletarLivros = (req,res)=>{
        const id = req.params.id;

        livros.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({message: 'Livro deletado com sucesso!'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }


}

module.exports = livrosController;