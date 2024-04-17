
// primero vamos a hacer que corra apra irle agrgando cosas

const mysql = require('mysql')
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
// aqui van las concexiones de las base de datos pero cuando la tengamos 
const conexion = mysql.createConnection({

	host : '127.0.0.1',
	user : 'daren',
	password : '5882',
	database : 'alumnos'
})
app.use(express.urlencoded({ extended: true }))
// Configuración de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

conexion.connect((error)  => {
	if (error){
		console.log("error en la conexion",error)
	}else{
		console.log("conexion exitosa")
	}

})

app.use(express.static(path.join(__dirname,'public')))

// primero mostramos el prewie de la pagina  

app.get('/' , (req,res) => {

	res.sendFile(path.join(__dirname,"public","index.html"))

})

app.get('/login' , (req,res) => {

	res.sendFile(path.join(__dirname,"public","inicio.html"))

})

// ahora recibiremos datos desde inico.html 
app.get('/ingreso/:correo', (req,res) => {

	var correo = req.params.correo
	console.log(correo)
})

module.exports = app 
