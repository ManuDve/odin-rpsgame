// Función para generar la jugada de la computadora
function getComputerChoice() {
    // inicializa una variable int
    // genera un numero aleatorio entre 1 a 3
    let randomNumber = Math.floor(Math.random() * 3)+1;
    // asigna un string al numero
    // retorna el string
    if (randomNumber === 1){
        return "Piedra";
    } else if (randomNumber === 2) {
        return "Papel";
    } else {
        return "Tijera";
    }
}

// Valor inicial de los puntajes

let playerPoints = 0;
let cpuPoints = 0;

// Función que muestra el puntaje

function showScore(){
    return console.log("El puntaje es (Jugador) " + playerPoints + " a " + cpuPoints + " (CPU)"); 
}

//Función para una ronda entre el jugador y la computadora
function playRound(playerSelection, computerSelection) {

    // compara un empate
    if (playerSelection == computerSelection) {
        // convierte el string a mayusculas en el caracter inicial
        return "¡Esto es un empate!, ambos eligieron " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    
    } else {
        // PC elige Papel
        while (computerSelection == "papel") {
            if (playerSelection == "tijera") {
                playerPoints++;
                return "Ganaste! Tijera vence a Papel";
            } else {
                cpuPoints++;
                return "Pierdes! Papel vence a Piedra";
            }
        }
        // PC elige Piedra
        while (computerSelection == "piedra") {
            if (playerSelection == "papel") {
                playerPoints++;
                return "Ganaste! Papel vence a Piedra";
            } else {
                cpuPoints++;
                return "Pierdes! Piedra vence a Tijera";
            }
        }
        // PC elige Tijera
        while (computerSelection == "tijera") {
            if (playerSelection == "piedra") {
                playerPoints++;
                return "Ganaste! Piedra vence a Tijera";
            } else {
                cpuPoints++;
                return "Pierdes! Tijera vence a Papel";
            }
        }

    }
    
}

// Función de juego

function game() {
    
    //debe jugar una ronda al mejor de 3
    while (playerPoints < 3 && cpuPoints < 3) {

        // define las variables y las convierte en minusculas
        let computerSelection = (getComputerChoice()).toLowerCase();
        let playerSelection = (prompt("Elige tu opción: Piedra, Papel o Tijera")).toLowerCase();
        // muestra por consola los returns de la funcion playRound
        console.log(playRound(playerSelection, computerSelection));
        showScore();
    }
    if (playerPoints == 3) {
        return "¡¡Ganaste el juego!!";
    } else {
        return "¡¡Perdiste el juego wuajaja!!";
    }
    
}

// Inicializa el juego

console.log(game());