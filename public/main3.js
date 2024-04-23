document.addEventListener('DOMContentLoaded', function () {
    var busqueda = document.getElementById('busqueda');
    var boton = document.getElementById('boton');
    var boton1 = document.getElementById('boton1')
    /*
    const url = "";

    fetch(url)
    .then(response => {
        if (!response.ok) {
            imagen_404();   
        } else {
            return response.json();
        }
    })
    .then(data =>{
         
    })
    .catch(error => {
        console.log(error);
    });
    */

    busqueda.addEventListener('keydown', function (event) {

        if (event.key === 'Enter') {
            var valorInput = event.target.value;
            filtro(valorInput);
        }
    });
    boton.addEventListener('click', function () {
        var campo = document.getElementById('busqueda').value;
        filtro(campo);
    });

    boton1.addEventListener('click', function () {
        // primero vamos a desaparecer todo lo que tenag el div 
        console.log('hola')
        var div_tabla = document.getElementById('tablas')
        var div = document.getElementById('comunicados')

        div_tabla.innerHTML = ''
        div.style.display = 'block'


    })
});


function filtro(dato) {
    var comunicados = document.getElementById('comunicados')
    comunicados.style.display = 'none'
    // primero si el usuario ingresa una de las palabras reservadas 
    // ara una busqueda personalizada 
    const palabra = ["alumnos", "docentes", "grupos"];

    if (dato == palabra[0] || dato == palabra[1] || dato == palabra[2]) {
        // Aquí empezamos lo que es hacer la solicitud en en cada caso 
        switch (dato) {

            case "alumnos":

                var div_tabla = document.getElementById('tablas');
                div_tabla.innerHTML = " ";
                const url = "http://127.0.0.1:3000/mostrar/" + dato;
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            imagen_404();
                        } else {
                            return response.json();
                        }
                    })
                    .then(data => {

                        const arreglo = data;
                        const elementos = arreglo.length;

                        // Primero tomamos las llaves del primer elemento del arreglo 
                        const llaves = Object.keys(arreglo[0]);

                        // Ahora creamos la tabla 
                        var tabla = document.createElement('table');
                        tabla.setAttribute('border', '1');

                        var fila = document.createElement('tr');

                        for (let i = 0; i < llaves.length; i++) {
                            var celda = document.createElement('th');
                            celda.style.background = "cyan";
                            celda.innerHTML = llaves[i];
                            fila.appendChild(celda);
                        }

                        tabla.appendChild(fila);

                        // Agregando los datos por fila 

                        for (let i = 0; i < elementos; i++) {
                            var fila = document.createElement('tr');
                            var datos = Object.values(arreglo[i]);
                            for (let j = 0; j < datos.length; j++) {
                                var celda = document.createElement('td');
                                var bandera = isNaN(datos[j]);
                                if (j == 0) {
                                    celda.style.background = "yellow";
                                }
                                if (bandera == false && j !== 0 && datos[j] < 6) {
                                    celda.style.background = "red";
                                    celda.style.color = "white";
                                }
                                celda.innerHTML = datos[j];
                                fila.appendChild(celda);
                            }
                            tabla.appendChild(fila);
                        }
                        div_tabla.appendChild(tabla);

                    })
                    .catch(error => {
                        console.log(error);
                    });

                break;

            case "docentes":

                var div_tabla2 = document.getElementById('tablas');
                div_tabla2.innerHTML = " ";
                const url2 = "http://127.0.0.1:3000/mostrar/" + dato;
                console.log(url2);

                fetch(url2)
                    .then(response => {
                        if (!response.ok) {
                            imagen_404();
                        } else {
                            return response.json();
                        }
                    })
                    .then(data => {

                        const arreglo = data;
                        const elementos = arreglo.length;

                        const llaves = Object.keys(arreglo[0]);

                        var tabla = document.createElement('table');
                        tabla.setAttribute('border', '1');

                        var fila = document.createElement('tr');

                        for (let i = 0; i < llaves.length; i++) {
                            var celda = document.createElement('th');
                            celda.style.background = "cyan";
                            celda.innerHTML = llaves[i];
                            fila.appendChild(celda);
                        }

                        tabla.appendChild(fila);

                        for (let i = 0; i < elementos; i++) {
                            var fila = document.createElement('tr');
                            var datos = Object.values(arreglo[i]);
                            for (let j = 0; j < datos.length; j++) {
                                var celda = document.createElement('td');
                                if (j == 0) {
                                    celda.style.background = "yellow";
                                }
                                celda.innerHTML = datos[j];
                                fila.appendChild(celda);
                            }
                            tabla.appendChild(fila);
                        }

                        div_tabla2.appendChild(tabla);

                    })
                    .catch(error => {
                        console.log(error);
                    });

                break;

            case "grupos":

                var div_tabla2 = document.getElementById('tablas');
                div_tabla2.innerHTML = " ";
                const urlgrupos = "http://127.0.0.1:3000/mostrar/" + dato;
                console.log(urlgrupos);

                fetch(urlgrupos)
                    .then(response => {
                        if (!response.ok) {
                            imagen_404();
                        } else {
                            return response.json();
                        }
                    })
                    .then(data => {

                        const arreglo = data;
                        const elementos = arreglo.length;

                        const llaves = Object.keys(arreglo[0]);

                        var tabla = document.createElement('table');
                        tabla.setAttribute('border', '1');

                        var fila = document.createElement('tr');

                        for (let i = 0; i < llaves.length; i++) {
                            var celda = document.createElement('th');
                            celda.style.background = "cyan";
                            celda.innerHTML = llaves[i];
                            fila.appendChild(celda);
                        }

                        tabla.appendChild(fila);

                        for (let i = 0; i < elementos; i++) {
                            var fila = document.createElement('tr');
                            var datos = Object.values(arreglo[i]);
                            for (let j = 0; j < datos.length; j++) {
                                var celda = document.createElement('td');
                                if (j == 0) {
                                    celda.style.background = "yellow";
                                }
                                celda.innerHTML = datos[j];
                                fila.appendChild(celda);
                            }
                            tabla.appendChild(fila);
                        }

                        div_tabla2.appendChild(tabla);

                    })
                    .catch(error => {
                        console.log(error);
                    });

                break
        }
    } else {

        var bandera = isNaN(dato);

        switch (bandera) {

            case true:
                // aqui si manda una cadena 
                var div_tabla = document.getElementById('tablas');
                div_tabla.innerHTML = " ";

                var div = document.getElementById('tablas');
                div.innerHTML = ' ';

                const url5 = 'http://127.0.0.1:3000/alumnos/' + dato;

                fetch(url5)
                    .then(response => {
                        if (!response.ok) {
                            imagen_404();
                        } else {
                            return response.json();
                        }
                    })
                    .then(data => {

                        var arreglo = data;
                        var elementos = arreglo.length;
                        // modificar aqui ponemos el else 

                        if (elementos <= 0) {
                            console.log('No se encontró ningún dato');
                            // Aquí hay que poner imagen de que no se encontró nada 
                            imagen_no_resultados()
                        } else {

                            console.log('Llegó un dato o más');
                            // Creamos tabla 
                            const llaves = Object.keys(arreglo[0]);

                            var tabla = document.createElement('table');
                            tabla.setAttribute('border', '1');

                            var fila = document.createElement('tr');

                            for (let i = 0; i < llaves.length; i++) {
                                var celda = document.createElement('th');
                                celda.style.background = "cyan";
                                celda.innerHTML = llaves[i];
                                fila.appendChild(celda);
                            }
                            tabla.appendChild(fila);

                            for (let i = 0; i < elementos; i++) {
                                var fila = document.createElement('tr');
                                var datos = Object.values(arreglo[i]);
                                for (let j = 0; j < datos.length; j++) {
                                    var celda = document.createElement('td');
                                    var bandera = isNaN(datos[j]);
                                    if (j == 0) {
                                        celda.style.background = "yellow";
                                    }
                                    if (bandera == false && j !== 0 && datos[j] < 6) {
                                        celda.style.background = "red";
                                        celda.style.color = "white";
                                    }
                                    celda.innerHTML = datos[j];
                                    fila.appendChild(celda);
                                }
                                tabla.appendChild(fila);
                            }
                            div.appendChild(tabla);

                        }

                    })
                    .catch(error => {
                        console.log(error);
                    });


                break;

            case false:

                var div = document.getElementById('tablas');
                div.innerHTML = ' ';

                const url4 = 'http://127.0.0.1:3000/alumnos/' + dato;

                fetch(url4)
                    .then(response => {
                        if (!response.ok) {
                            imagen_404();
                        } else {
                            return response.json();
                        }
                    })
                    .then(data => {

                        var arreglo = data;
                        var elementos = arreglo.length;

                        switch (elementos) {
                            case 0:
                                console.log('No se encontró ningún dato');
                                // Aquí hay que poner imagen de que no se encontró nada 
                                imagen_no_resultados()
                                break;
                            case 1:
                                console.log('Llegó un dato o más');
                                // Creamos tabla 
                                const llaves = Object.keys(arreglo[0]);

                                var tabla = document.createElement('table');
                                tabla.setAttribute('border', '1');

                                var fila = document.createElement('tr');

                                for (let i = 0; i < llaves.length; i++) {
                                    var celda = document.createElement('th');
                                    celda.style.background = "cyan";
                                    celda.innerHTML = llaves[i];
                                    fila.appendChild(celda);
                                }
                                tabla.appendChild(fila);

                                for (let i = 0; i < elementos; i++) {
                                    var fila = document.createElement('tr');
                                    var datos = Object.values(arreglo[i]);
                                    for (let j = 0; j < datos.length; j++) {
                                        var celda = document.createElement('td');
                                        var bandera = isNaN(datos[j]);
                                        if (j == 0) {
                                            celda.style.background = "yellow";
                                        }
                                        if (bandera == false && j !== 0 && datos[j] < 6) {
                                            celda.style.background = "red";
                                            celda.style.color = "white";
                                        }
                                        celda.innerHTML = datos[j];
                                        fila.appendChild(celda);
                                    }
                                    tabla.appendChild(fila);
                                }
                                div.appendChild(tabla);
                                break;
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
                break;
        }
    }
}

function imagen_404() {
    var div = document.getElementById('tablas');
    div.innerHTML = ' ';
    var imagen = document.createElement('img');
    imagen.setAttribute('src', '/icons/error_servidor.png');
    imagen.setAttribute('width', '500px');
    div.appendChild(imagen);
}

function imagen_no_resultados() {
    var div = document.getElementById('tablas');
    div.innerHTML = ' ';
    var imagen = document.createElement('img');
    imagen.setAttribute('src', '/icons/no_resultados.png');
    imagen.setAttribute('width', '500px');
    div.appendChild(imagen);
}
