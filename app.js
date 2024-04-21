
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
app.use(cors())
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
app.get('/ingreso/:correo/:contra', (req,res) => {

	var correo = req.params.correo
	var contra = req.params.contra
	console.log(correo)
	console.log(contra)
	const consulta = "select email from coordinador where email = ? and contra = ? "
	conexion.query(consulta , [correo,contra] , (error,resultado) => {
		// 
		if(error){
			console.log("erro en el respuesta" , error)
		}else {
			res.json(resultado)
			console.log("Exito")
			console.log(resultado)
		}
	})
})

// ruta de busqueda por alumno de manera individual 

app.get('/alumnos/:id' , (req,res) => {
	var id = req.params.id
	const consulta = "select * from alumnos where id = ?"
	conexion.query(consulta , [id] , (error , resultado ) => {
		if(error){
			console.log("error en la consulta")
		}else {
			console.log("consulta realizada con exito")
			res.json(resultado)
		}
	})
})

// ruta docente 

app.get('/mostrar/:palabra' , (req,res) => {
	var palabra = req.params.palabra
	switch(palabra){
		case "alumnos":
			const consulta = "select * from alumnos"
			conexion.query(consulta, [palabra] , (error, resultado) => {
					if(error){
						console.log(error)
					}else{
						res.json(resultado)
					}
			})
		break;
		case "docentes" :
			const consulta2 =  "select * from profesores"
			conexion.query(consulta2 , [palabra] , (error , resultado) => {
				if(error){
					console.log("error en la consulta")
				}else{
					res.json(resultado)
				}
			})
		break;
		
		case 'grupos' :
			const consulta3 = "select * from Grupos"
			conexion.query(consulta3,(error,resultado) => {
				if(error){
					console.log("error en consulta")
				}else{
					res.json(resultado)
				}
			})
		break; 
	}
})

// ruta que nos da el grupo o nos devuelve los grupos 

app.get('/grupos/' , (req,res) => {

	var grupo = req.params.grupo

	const consul = "select * from Grupos"

	conexion.query(consul ,(error,resultado) => {

		if(error){
			console.log("no se puede realizar la consulta")
		}else{
			res.json(resultado)
		}

	})
})

// esta ruta es del boton cunado se presiona en busqueda que retorna 



module.exports = app 
