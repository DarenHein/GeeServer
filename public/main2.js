// todo aqui esta todo lo referente a inicio.html

document.addEventListener('DOMContentLoaded',function(){
    // primero aremos validadciones de los campos 
    var boton = document.getElementById('boton')

    boton.addEventListener('click' , function(){
        var correo = document.getElementById('email').value
        var contra = document.getElementById('password').value
        if(correo == "" || contra == ""){
            console.log("hola")
        }
    
    })
})
