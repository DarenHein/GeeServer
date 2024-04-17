document.addEventListener('DOMContentLoaded', function(){
    // primero haremos validaciones de los campos 
    var boton = document.getElementById('boton');

    boton.addEventListener('click', function(){
        var correo = document.getElementById('email').value;
        var contra = document.getElementById('password').value;
        var mensaje = document.getElementById('mensaje');
        var mensaje2 = document.getElementById('mensaje2');
        var arreglo = ["@hotmail.com", "@gmail.com"];
        mensaje.innerHTML = "";
        mensaje2.innerHTML = "";

        if(correo == "" || contra == ""){
            mensaje.innerHTML = "Campo Vacio";
            mensaje2.innerHTML = "Campo Vacio";
        } else {
            if (correo.includes(arreglo[0]) || correo.includes(arreglo[1])){
                mensaje.innerText = "pasa";
            } else {
                mensaje.innerHTML = "no pasa";
            }
        }
    });
});
