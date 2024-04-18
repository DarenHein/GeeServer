// este js esta vinculado a app.html 

document.addEventListener('DOMContentLoaded',function(){
    var busqueda = document.getElementById('busqueda')
    var mensaje = document.getElementById('busqueda').value

    busqueda.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            console.log(mensaje)            
        }   
    })
})