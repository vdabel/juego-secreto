let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteado = [];
let numeroMaximo = 10;
let numeroMinimo = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        console.log(intentos);
        intentos++;
    }

    limpiarCaja();
    document.querySelector("#valorUsuario").focus();


    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteado.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se asignaron todos los números posibles");
    } else {
        //Si el número generado esta incluido en la lista
        if (listaNumerosSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    document.querySelector("#valorUsuario").focus();
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar la caja
    limpiarCaja();

    // indicar mensaje, inicializar el número de intentos y generar el número aleatorio
    condicionesIniciales();

    // dehabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();



