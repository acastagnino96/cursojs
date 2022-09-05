function uno(axilas, cantSesiones){
    let resultado = axilas * cantSesiones;
    return resultado;
}

function dos(piernas, cantSesiones){
    let resultado = piernas * cantSesiones;
    return resultado;
}

function tres(abdomen, cantSesiones){
    let resultado = abdomen * cantSesiones;
    return resultado;
}

function cuatro(rostro, cantSesiones){
    let resultado = rostro * cantSesiones;
    return resultado;
}

function mostrarResultado(resultado) {
    alert ("El total a abonar es: $" + resultado);
}

function mostrarMenu(){
    let opcion = prompt(
        "Seleccione la zona a depilar (ESC para salir) \n 1.Axilas $500 \n 2.Piernas $2000 \n 3.Abdomen $1000 \n 4.Rostro $1500"
    );
    return opcion;
}

function depilacion() {
    let opcionSeleccionada = mostrarMenu();
    while (opcionSeleccionada !== "ESC") {
        if (opcionSeleccionada !== "") {
            opcionSeleccionada = parseInt(opcionSeleccionada);

            if (!isNaN(opcionSeleccionada)){
                let cantSesiones = parseInt(prompt("Ingrese la cantidad de sesiones a realizar"));
                let axilas = 500;
                let piernas = 2000;
                let abdomen = 1000;
                let rostro = 1500;

                switch (opcionSeleccionada) {
                    case 1:
                        let resultadoUno = uno(axilas, cantSesiones);
                        mostrarResultado(resultadoUno);
                        break;

                    case 2:
                        let resultadoDos = dos(piernas, cantSesiones);
                        mostrarResultado(resultadoDos);
                        break;

                    case 3:
                        let resultadoTres = tres(abdomen, cantSesiones);
                        mostrarResultado(resultadoTres);
                        break;

                    case 4:
                        let resultadoCuatro = cuatro(rostro, cantSesiones);
                        mostrarResultado(resultadoCuatro);
                        break;

                    default:
                        alert("Opción incorrecta");
                        break;
                }
            } else{
                alert("Ingresó datos incorrectos");
            }
        } else{
            alert("Seleccione una opción");
        }
        opcionSeleccionada = mostrarMenu();
    }
}

depilacion();