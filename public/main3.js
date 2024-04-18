// este js esta vinculado a app.html 

document.addEventListener('DOMContentLoaded',function(){
    var busqueda = document.getElementById('busqueda')
    var boton = document.getElementById('boton')

    busqueda.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            var valorInput = event.target.value;
            console.log(valorInput)       
        }   
    })
    boton.addEventListener('click',function(){
        var campo = document.getElementById('busqueda').value
        console.log(campo)
    })
})