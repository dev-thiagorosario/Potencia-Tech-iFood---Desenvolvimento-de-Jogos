const ecv = [
	"img/alex alves(1).webp",
	"img/alex alves(2).webp",
	"img/campeoes serie b(1).jpg",
	"img/campeoes serie b(2).jpg",
	"img/escudo(1).png",
	"img/escudo(2).png",
	"img/leao(1).jpg",
	"img/leao(2).jpg",
	"img/logo(1).png",
	"img/logo(2).png",
	"img/mosaico barradao(1).webp",
	"img/mosaico barradao(2).webp",
	"img/Pichetti(1).jpg",
	"img/Pichetti(2).jpg",
	"img/ramom rei(1).jpg",
	"img/ramom rei(2).jpg",
	"img/SELEÇÃO DE 2010 (1).jpg",
	"img/SELEÇÃO DE 2010 (2).jpg",
	"img/uniforme(1).jpeg",
	"img/uniforme(2).jpeg",
	]

let openCards = [];
let timer;
let timeLeft = 5 * 60; 

document.addEventListener("DOMContentLoaded", function() {
    let shuffleCards = ecv.sort(() => Math.random() > 0.5 ? 2 : -1);

    for (let i = 0; i < ecv.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        
        let img = document.createElement("img");
        img.src = shuffleCards[i];  
        img.style.width = "100%";   
        img.style.height = "100%";  

        box.addEventListener('click', function() {
            if (openCards.length < 2) {
                this.classList.add("boxOpen"); 
                openCards.push(this);
                if (openCards.length === 2) {
                    setTimeout(checkMath, 500);
                }
            }
        });

        box.appendChild(img); 
        document.querySelector(".game").appendChild(box); 
    }

     document.querySelector(".btn-primary").addEventListener("click", startGame);
});

function checkMath() {
    let firstCardName = extractBaseName(openCards[0].children[0].src);
    let secondCardName = extractBaseName(openCards[1].children[0].src);

    if (firstCardName === secondCardName) {
        openCards[0].classList.add("boxMath");
        openCards[1].classList.add("boxMath");

        checkVictoryCondition();
    } else {
        openCards.forEach(card => card.classList.remove("boxOpen"));
    }
    openCards = [];
}

function extractBaseName(path) {
    return path.replace(/(\(1\)|\(2\))\.\w+$/, '');
}

function checkVictoryCondition() {

    let totalCards = document.querySelectorAll(".item").length;


    let matchedCards = document.querySelectorAll(".boxMath").length;

   
    if (matchedCards === totalCards) {
        alert("PARABÉNS PELA VITÓRIA!");
    }
}

function startGame() {
    if(timer) {
        clearInterval(timer);
    }
    timeLeft = 5 * 60; 
    timer = setInterval(updateTimer, 1000); 
}

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById("timer").textContent = `${minutes}:${seconds}`;

    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timer);
        alert("Tempo esgotado! Você perdeu o jogo.");
    }
}
