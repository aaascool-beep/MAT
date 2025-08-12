document.getElementById('start-course').addEventListener('click', () => {
  document.getElementById('course').classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  loadQuiz();
});

function loadQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = `
    <p>Q1: What does MAT stand for?</p>
    <input type="radio" name="q1" value="a"> Medical Assistance Training<br>
    <input type="radio" name="q1" value="b"> Mobility Assistance Technician<br>
    <input type="radio" name="q1" value="c"> Manual Access Transport
  `;
}

document.getElementById('submit-quiz').addEventListener('click', () => {
  const answer = document.querySelector('input[name="q1"]:checked');
  if (answer && answer.value === 'b') {
    alert('Correct! You passed this quiz.');
  } else {
    alert('Incorrect. Try again.');
  }
});
