// este js esta vinculado a app.html 

document.addEventListener('DOMContentLoaded',function(){
    var busqueda = document.getElementById('busqueda')
    var boton = document.getElementById('boton')
    /*
    const url = ""

    fetch(url)
    .then(response => {
        if(!response.ok){
            console.log("no se pudp")
        }else {
            return response.json()
        }
    })
    .then(data =>{
         
    })
    .catch(error => {
        console.log(error)
    })
    */
    busqueda.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            var valorInput = event.target.value;
            filtro(valorInput) 
        }   
    })
    boton.addEventListener('click',function(){
        var campo = document.getElementById('busqueda').value 
        filtro(campo)
    })
})

// primero hacemos un filtro 

function filtro(dato){

    // solo va aver numeros por el momento 
    // si lelga a encontrar una palabra que no sea de las recervadas alv 
    
    const palabra = ["alumnos","docentes"]
    
    if (dato == palabra[0] || dato == palabra[1]){
        // aqui empezamos lo que es hacer la solicitud en en cada caso 
        switch(dato){
            case "alumnos" :
                var mensaje = document.createElement('h1')
                mensaje.innerHTML = "Alumnos : "
                document.body.appendChild(mensaje)
                break
            case "docentes" :
                var mensaje = document.createElement('h1')
                mensaje.innerHTML = "Docentes : "
                document.body.appendChild(mensaje)
                break
        }
    }else {
        if(dato){}
    }


}

function verificar(valor){
    // aqui hacremos la solicitu no importa que se al boton o 
    // el cmapo de texto 
    
}