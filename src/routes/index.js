const express = require('express');
const livros = require('./routesLivro.js')

const routes = (app)=>{
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo: "curso de node"})
    })

    app.use(
        express.json(),
        livros
      )
}

module.exports = routes;