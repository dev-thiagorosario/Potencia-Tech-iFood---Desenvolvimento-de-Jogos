const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        score: document.querySelector("#score")
    },
    values: {
        sheepSquare: null,
        wolfTimers: [],
        wolfSquares: [],
        rounds: 0,
        lifes: 3,
        maxWolves: 1
    }
};

function showWolf() {
    if (state.values.wolfSquares.length >= state.values.maxWolves) return;

    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 9);
    } while (state.view.squares[randomNumber] === state.values.sheepSquare || state.values.wolfSquares.includes(state.view.squares[randomNumber]));

    let wolfSquare = state.view.squares[randomNumber];
    wolfSquare.classList.add("lobo");
    state.values.wolfSquares.push(wolfSquare);

    setTimeout(() => {
        let index = state.values.wolfSquares.indexOf(wolfSquare);
        if (index !== -1) {
            wolfSquare.classList.remove("lobo");
            state.values.wolfSquares.splice(index, 1);
        }
    }, 1000);
}

function checkAddWolf() {
    if ((state.values.rounds === 5 || state.values.rounds === 15) && state.values.maxWolves < 3) {
        state.values.maxWolves++;
        startWolfTimer();
    }
}

function updateRoundsDisplay() {
    state.view.score.textContent = state.values.rounds;
}

function placeSheep() {
    let randomNumber = Math.floor(Math.random() * 9);
    let sheepSquare = state.view.squares[randomNumber];
    sheepSquare.classList.add("ovelha");
    state.values.sheepSquare = sheepSquare;
}

function moveSheep(event) {
    let selectedSquare = event.target;

    if (selectedSquare.classList.contains("square") && selectedSquare !== state.values.sheepSquare) {
        if (state.values.sheepSquare) {
            state.values.sheepSquare.classList.remove("ovelha");
        }

        selectedSquare.classList.add("ovelha");
        state.values.sheepSquare = selectedSquare;
    }

    if (!state.values.wolfSquares.includes(selectedSquare)) {
        state.values.rounds++;
        updateRoundsDisplay();
        checkAddWolf();
    }

    checkGameOver();
}

function checkGameOver() {
    if (state.values.wolfSquares.includes(state.values.sheepSquare)) {
        state.values.lifes--;  
        updateLifesDisplay();  
        if (state.values.lifes <= 0) {
            window.location.href = 'derrota.html';  
        } else {
            alert("Game Over - Lost a Life");
            state.values.wolfTimers.forEach(timer => clearInterval(timer));
            state.values.wolfTimers = [];
        }
    }
}

function startWolfTimer() {
    for (let i = state.values.wolfTimers.length; i < state.values.maxWolves; i++) {
        state.values.wolfTimers.push(setInterval(showWolf, 4000));
    }
}

function updateLifesDisplay() {
    let lifesElement = document.getElementById("lifes");
    lifesElement.textContent = `X${state.values.lifes}`;
}

function initial() {
    state.values.rounds = 0;
    state.values.lifes = 3;  
    updateRoundsDisplay();
    updateLifesDisplay();  

    placeSheep();
    startWolfTimer();
    state.view.squares.forEach(square => {
        square.addEventListener('click', moveSheep);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    initial();
});
