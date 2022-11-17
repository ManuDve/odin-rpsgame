// Función para generar la jugada de la computadora
function getComputerChoice() {
    
    // genera un numero aleatorio entre 1 a 3
    let randomNumber = Math.floor(Math.random() * 3)+1;
    // asigna un string al numero y lo retorna
    if (randomNumber === 1){
        return "piedra";
    } else if (randomNumber === 2) {
        return "papel";
    } else {
        return "tijera";
    }
}

// Valor inicial de los puntajes

let playerPoint = 0;
let cpuPoint = 0;

// Función que muestra el puntaje

function addPlayerPoints() {
    return playerPoint++;
}

function addCpuPoints() {
    return cpuPoint++;  
}

// Muestra el resultado
function finalScore(){
    if (playerPoint>cpuPoint && playerPoint == 5) {
        score.textContent = `¡Ganaste! con un puntaje de ${playerPoint} a ${cpuPoint}`;
    } else if (playerPoint<cpuPoint && cpuPoint == 5){
        score.textContent = `¡Perdiste! con un puntaje de ${playerPoint} a ${cpuPoint}`
    }
    
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
                addPlayerPoints();
                return "¡Ganaste! Tijera vence a Papel";
            } else {
                addCpuPoints();
                return "¡Pierdes! Papel vence a Piedra";
            }
        }
        // PC elige Piedra
        while (computerSelection == "piedra") {
            if (playerSelection == "papel") {
                addPlayerPoints();
                return "¡Ganaste! Papel vence a Piedra";
            } else {
                addCpuPoints();
                return "¡Pierdes! Piedra vence a Tijera";
            }
        }
        // PC elige Tijera
        while (computerSelection == "tijera") {
            if (playerSelection == "piedra") {
                addPlayerPoints();
                return "¡Ganaste! Piedra vence a Tijera";
            } else {
                addCpuPoints();
                return "¡Pierdes! Tijera vence a Papel";
            }
        }

    }
    
}

// Eventos

const piedra = document.querySelector(".piedra");
const papel = document.querySelector(".papel");
const tijera = document.querySelector(".tijera");
const resultados = document.querySelector("#resultados");
const score = document.querySelector(".score");

piedra.addEventListener("click", ()=> {
    resultados.textContent = playRound("piedra", getComputerChoice());
    score.textContent = "Jugador: " + playerPoint + " CPU: " + cpuPoint;
    finalScore();
})

papel.addEventListener("click", ()=> {
    resultados.textContent = playRound("papel", getComputerChoice());
    score.textContent = "Jugador: " + playerPoint + " CPU: " + cpuPoint;
    finalScore();
    
})

tijera.addEventListener("click", ()=> {
    resultados.textContent = playRound("tijera", getComputerChoice());
    score.textContent = "Jugador: " + playerPoint + " CPU: " + cpuPoint;
    finalScore();
})


