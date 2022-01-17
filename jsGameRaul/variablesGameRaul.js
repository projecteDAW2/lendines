//Iconos de daw
const iconosDaw = [
    { name: 'js', icon: 'fab fa-js-square' },
    { name: 'css', icon: 'fab fa-css3-alt' },
    { name: 'html', icon: 'fab fa-html5' },
    { name: 'php', icon: 'fab fa-php' },
    { name: 'fiddle', icon: 'fab fa-jsfiddle' },
    { name: 'bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'js', icon: 'fab fa-js-square' },
    { name: 'css', icon: 'fab fa-css3-alt' },
    { name: 'html', icon: 'fab fa-html5' },
    { name: 'php', icon: 'fab fa-php' },
    { name: 'fiddle', icon: 'fab fa-jsfiddle' },
    { name: 'bootstrap', icon: 'fab fa-bootstrap' },
]

const iconosMarqueting = [
    { name: 'mail', icon: 'fas fa-mail-bulk' },
    { name: 'poll', icon: 'fas fa-poll' },
    { name: 'money', icon: 'fas fa-comment-dollar' },
    { name: 'bullhorn', icon: 'fas fa-bullhorn' },
    { name: 'bullseye', icon: 'fas fa-bullseye' },
    { name: 'lightbulb', icon: 'fas fa-lightbulb' },
    { name: 'mail', icon: 'fas fa-mail-bulk' },
    { name: 'poll', icon: 'fas fa-poll' },
    { name: 'money', icon: 'fas fa-comment-dollar' },
    { name: 'bullhorn', icon: 'fas fa-bullhorn' },
    { name: 'bullseye', icon: 'fas fa-bullseye' },
    { name: 'lightbulb', icon: 'fas fa-lightbulb' }
]

const tablero = document.querySelector("#tablero");

//LAS CARTAS RESUELTAS
const cartasResueltas = document.querySelectorAll(".resuelto");

let cartaVolteada = false;
let primeraCarta, segundaCarta;
let res;
let resultado = 0;
let puntuacion = 0;

let minute = 0;        //Declaracion de los minutos
let seconds = 60;       //Declaracion de los segundos
let secondsInicial = seconds;
let time;
let tiempoFinal;