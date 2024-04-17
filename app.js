
// primero vamos a hacer que corra apra irle agrgando cosas

const mysql = require('mysql')
const express = require('express')
const app = express()
const path = require('path')
// aqui van las concexiones de las base de datos pero cuando la tengamos 

app.use(express.static(path.join(__dirname,'public')))

// primero mostramos el prewie de la pagina  

app.get('/' , (req,res) => {

	res.sendFile(path.join(__dirname,"public","index.html"))

})

app.get('/login' , (req,res) => {

	res.sendFile(path.join(__dirname,"public","inicio.html"))

})


module.exports = app 
