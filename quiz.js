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

// Quiz data
const questions = [
    {
      question: "Pourquoi Mimi a-t-elle décidé de participer au concours de beauté ?",
      answers: ["Pour impressionner sa mère", "Pour échapper à sa médiocrité", "Pour gagner un prix en argent", "Pour prouver qu'elle était meilleure que ses amies"],
      correct: "Pour échapper à sa médiocrité"
    },
    {
      question: "Qu’est-ce qui a poussé les villageois à suspecter les intentions de Mimi ?",
      answers: ["Elle a acheté un maillot de bain", "Elle a cessé de parler à ses amis", "Elle a commencé à porter du maquillage", "Elle a annoncé ouvertement son plan"],
      correct: "Elle a acheté un maillot de bain"
    },
    {
      question: "De quelle couleur était la robe que Mimi a confectionnée pour le concours ?",
      answers: ["Rouge", "Bleue", "Jaune (safran)", "Verte"],
      correct: "Jaune (safran)"
    },
    {
      question: "Pourquoi Mimi n’a-t-elle pas réussi au concours de beauté ?",
      answers: ["Elle a raté le bus pour l’événement", "Ses mensurations ne correspondaient pas aux standards de beauté", "Elle a oublié sa robe à la maison", "Elle a refusé de participer à la finale"],
      correct: "Ses mensurations ne correspondaient pas aux standards de beauté"
    },
    {
      question: "Comment les villageois ont-ils réagi lorsque Mimi est revenue du concours ?",
      answers: ["Ils ont célébré son courage", "Ils se sont moqués d’elle en silence", "Ils l’ont accueillie chaleureusement", "Ils l’ont complètement ignorée"],
      correct: "Ils se sont moqués d’elle en silence"
    },
    {
      question: "Quels changements ont eu lieu chez Mimi après sa défaite ?",
      answers: ["Elle a déménagé dans un autre village", "Elle est devenue moins attirante et a perdu confiance", "Elle a été élue chef du village", "Elle a ouvert un salon de beauté"],
      correct: "Elle est devenue moins attirante et a perdu confiance"
    },
    {
      question: "Que refait Mimi après le concours ?",
      answers: ["Elle confectionne des chapeaux", "Elle écrit de la poésie", "Elle participe à des concours plus petits", "Elle enseigne la couture"],
      correct: "Elle confectionne des chapeaux"
    },
    {
      question: "Que révèle l’histoire de Mimi sur sa beauté ?",
      answers: ["Elle reposait surtout sur sa confiance en elle", "Elle était due à ses vêtements coûteux", "Elle était le résultat de l'influence de sa mère", "Elle était totalement naturelle et sans effort"],
      correct: "Elle reposait surtout sur sa confiance en elle"
    },
    {
      question: "Qu’a continué à faire Mimi après le concours, malgré sa déception ?",
      answers: ["Rêver d’une vie meilleure", "Préparer un autre concours", "Écrire un livre sur son expérience", "Déménager dans une grande ville"],
      correct: "Rêver d’une vie meilleure"
    },
    {
      question: "Quel est le thème principal de l’histoire ?",
      answers: ["Les défis de la célébrité", "La nature éphémère de la beauté", "L’importance de la famille", "La lutte pour le succès financier"],
      correct: "La nature éphémère de la beauté"
    }
  ];  

let currentQuestion = 0; // Tracks the current question index
let score = 0; // Tracks the user's score

// Load the current question
function loadQuestion() {
const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answers");

// Clear old answers
answerButtons.innerHTML = "";

// Display the question
questionElement.textContent = questions[currentQuestion].question;

// Create answer buttons with unique IDs
questions[currentQuestion].answers.forEach((answer, index) => {
  const button = document.createElement("button");
  button.textContent = answer;
  button.id = answer; // Set the ID to be the answer text
  button.classList.add("answer-button");
  button.onclick = () => checkAnswer(answer);

  console.log(`Created button for answer: ${answer} with id: ${button.id}`);

  answerButtons.appendChild(button);
});


// Update progress
document.querySelector(".progress").textContent = `Question ${currentQuestion + 1} sur ${questions.length}`;
}

// Check if the answer is correct
function checkAnswer(selectedAnswer) {
const correctAnswer = questions[currentQuestion].correct;
const answerButtons = document.querySelectorAll('.answer-button');

// Reset button colors
answerButtons.forEach(button => {
  button.style.backgroundColor = ''; // Reset all buttons to default
});

if (selectedAnswer === correctAnswer) {
  // If the selected answer is correct
  document.getElementById(selectedAnswer).style.backgroundColor = 'green'; // Highlight the correct answer button
  alert("vrai🎉");
  score++;
} else {
  // If the selected answer is incorrect
  document.getElementById(selectedAnswer).style.backgroundColor = 'red'; // Highlight the wrong answer button
  document.getElementById(correctAnswer).style.backgroundColor = 'green'; // Highlight the correct answer button
  alert(`Faux! La réponse est ${correctAnswer}. 😢`);
}

// Move to the next question or end the quiz
currentQuestion++;
if (currentQuestion < questions.length) {
  loadQuestion();
} else {
  endQuiz();
}
}

// End the quiz and show the score
function endQuiz() {
const quizContainer = document.querySelector(".container");
quizContainer.innerHTML = `
  <div class="end-container">
    <h1 class="end-title">Quiz terminé!</h1>
    <p class="end-score">Votre score est ${score} / ${questions.length}.</p>
    <button class="restart-button" onclick="restartQuiz()">rejouer</button>
  </div>
`;
}

function restartQuiz() {
// Save the score in localStorage to display on the main menu
localStorage.setItem("lastScore", score);

// Redirect to the main menu page
window.location.href = "index.html"; // Ensure the main menu is in this file
}
