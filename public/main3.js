// este js esta vinculado a app.html 

document.addEventListener('DOMContentLoaded', function () {
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
    busqueda.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            var valorInput = event.target.value;
            filtro(valorInput)
        }
    })
    boton.addEventListener('click', function () {
        var campo = document.getElementById('busqueda').value
        filtro(campo)
    })
})

// primero hacemos un filtro 

function filtro(dato) {

    // solo va aver numeros por el momento 
    // si lelga a encontrar una palabra que no sea de las recervadas alv 

    const palabra = ["alumnos", "docentes"]

    if (dato == palabra[0] || dato == palabra[1]) {
        // aqui empezamos lo que es hacer la solicitud en en cada caso 
        switch (dato) {
            case "alumnos":
                var div_tabla = document.getElementById('tablas')
                div_tabla.innerHTML = " "
                const url = "http://127.0.0.1:3000/mostrar/" + dato
                fetch(url)

                    .then(response => {
                        if (!response.ok) {
                            console.log("error")
                        } else {
                            return response.json()
                        }
                    })
                    .then(data => {

                        const arreglo = data

                        const elementos = arreglo.length

                        // primero tomamos las llaves del primer elemento del arreglo 
                        const llaves = Object.keys(arreglo[0])

                        // ahora creamos la tabla 
                        var tabla = document.createElement('table')
                        tabla.setAttribute('border', '1')

                        var fila = document.createElement('tr')

                        for (let i = 0; i < llaves.length; i++) {
                            var celda = document.createElement('th')
                            celda.innerHTML = llaves[i]
                            fila.appendChild(celda)
                        }

                        tabla.appendChild(fila)

                        // agregando los datos ala por fila 

                        for (let i = 0; i < elementos; i++) {
                            var fila = document.createElement('tr')
                            var datos = Object.values(arreglo[i])
                            for (let j = 0; j < datos.length; j++) {
                                var celda = document.createElement('td')
                                
                                celda.innerHTML = datos[j]
                                fila.appendChild(celda)
                            }
                            tabla.appendChild(fila)
                        }

                        div_tabla.appendChild(tabla)

                    })
                    .catch(error => {
                        console.log(error)
                    })

                break

            case "docentes":
                var div_tabla2 = document.getElementById('tablas')
                div_tabla2.innerHTML = " " 
                const url2 = "http://127.0.0.1:3000/mostrar/" + dato
                console.log(url2)
                fetch(url2)

                    .then(response => {
                        if (!response.ok) {
                            console.log("error")
                        } else {
                            return response.json()
                        }
                    })
                    .then(data => {

                        const arreglo = data

                        const elementos = arreglo.length

                        // primero tomamos las llaves del primer elemento del arreglo 
                        const llaves = Object.keys(arreglo[0])

                        // ahora creamos la tabla 
                        var tabla = document.createElement('table')
                        tabla.setAttribute('border', '1')

                        var fila = document.createElement('tr')

                        for (let i = 0; i < llaves.length; i++) {
                            var celda = document.createElement('th')
                            celda.innerHTML = llaves[i]
                            fila.appendChild(celda)
                        }

                        tabla.appendChild(fila)

                        // agregando los datos ala por fila 

                        for (let i = 0; i < elementos; i++) {
                            var fila = document.createElement('tr')
                            var datos = Object.values(arreglo[i])
                            for (let j = 0; j < datos.length; j++) {
                                var celda = document.createElement('td')
                                celda.innerHTML = datos[j]
                                fila.appendChild(celda)
                            }
                            tabla.appendChild(fila)
                        }

                        div_tabla2.appendChild(tabla)

                    })
                    .catch(error => {
                        console.log(error)
                    })

                break
        }
    } else {
        if (dato) { }
    }
}

function verificar(valor) {
    // aqui hacremos la solicitu no importa que se al boton o 
    // el cmapo de texto 

}