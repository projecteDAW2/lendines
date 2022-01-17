

document.addEventListener('DOMContentLoaded', () => {
    menu();
});

//Juego modo facil
function juegoFacil() {

    let icon = document.forms["modulos"]["modulo"].value;
    if (icon == "Daw") {
        iconos = iconosDaw;
    }
    else if(icon == "Marketing"){
        iconos = iconosMarqueting;
    }

    divCentrar = document.getElementById("centrar");

    document.getElementById('memory-game').removeChild(divCentrar);

    for (let i = 0; i < 12; i++) {
        card();
    }

    mezclar(iconos);     //Cuando tenga dos sets habra un if

    mostrarEventos();

    timedCount();
}

//Juego modo dificil
function juegoDificil() {
   
    let icon = document.forms["modulos"]["modulo"].value;
    if (icon == "Daw") {
        iconos = iconosDaw;
    }
    else if(icon == "Marketing"){
        iconos = iconosMarqueting;
    }

    divCentrar = document.getElementById("centrar");

    document.getElementById('memory-game').removeChild(divCentrar);

    for (let i = 0; i < 12; i++) {
        cartasDificil();
    }

    mezclar(iconos);     //Cuando tenga dos sets habra un if

    mostrarEventos();

    timedCount();
}

//Fin del juego
function gameOver() {
    //Recorro 12 veces la funcion de borrar cartas
    for (let i = 0; i < 12; i++) {
        removeCards();
    }

    tiempoFinal = secondsInicial - seconds;

    clearTimeout(time);
    document.getElementById("timer").innerHTML = " ";

    pantallaFinal();

}

//Borrar cartas al final del juego
function removeCards() {
    if (document.getElementById("card") != null) {
        card = document.getElementById("card");

        document.getElementById('memory-game').removeChild(card);
        
    }
}



