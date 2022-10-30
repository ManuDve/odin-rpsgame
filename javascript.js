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

// define las variables y las convierte en minusculas
const computerSelection = (getComputerChoice()).toLowerCase();
const playerSelection = (prompt("Elige tu opción: Piedra, Papel o Tijera")).toLowerCase();

//Función para una ronda entre el jugador y la computadora
function playRound(playerSelection, computerSelection) {
   
    // compara un empate
    if (playerSelection == computerSelection) {
        // convierte el string a mayusculas en la inicial
        return "¡Esto es un empate!, ambos eligieron " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    
    } else {
        // PC elige Papel
        while (computerSelection == "papel") {
            if (playerSelection == "tijera") {
                return "Ganaste! Tijera vence a Papel";
            } else {
                return "Pierdes! Papel vence a Piedra";
            }
        }
        // PC elige Piedra
        while (computerSelection == "piedra") {
            if (playerSelection == "papel") {
                return "Ganaste! Papel vence a Piedra";
            } else {
                return "Pierdes! Piedra vence a Tijera";
            }
        }
        // PC elige Tijera
        while (computerSelection == "tijera") {
            if (playerSelection == "piedra") {
                return "Ganaste! Piedra vence a Tijera";
            } else {
                return "Pierdes! Tijera vence a Papel";
            }
        }

    }
    
}



console.log(playRound(playerSelection, computerSelection));


// Función de juego

function game() {
    playRound();
}