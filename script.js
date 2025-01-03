function createFlowers(numFlowers) {
    for (let wave = 0; wave < numFlowers / 100; wave++) {
        setTimeout(() => {
            for (let i = 0; i < 100; i++) {
                let flower = document.createElement('div');
                flower.classList.add('flower');

                flower.style.setProperty('--random-x' , Math.random());
                flower.style.setProperty('--random-top' , Math.random() * -100);

                document.body.appendChild(flower);
            }
        } , wave * 2000);
    }
}

createFlowers(400);

const lastScore = localStorage.getItem("lastScore");
const lastScoreElement = document.getElementById("last-score");

if (lastScore !== null) {
  lastScoreElement.textContent = `${lastScore}`;
} else {
  lastScoreElement.textContent = "0";
}

function startGame() {
    window.location.href = "quiz.html"; 
}

