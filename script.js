





//   const number1 = Math.floor(Math.random() * 10) + 1;
//   const number2 = Math.floor(Math.random() * 5) + 1;
//   const operator = '+';

// function generateQuestion() {
  
//   document.getElementById('question').textContent = `What is ${number1} ${operator} ${number2}?`;
// }

// function correctAnswer() {
//   return Number(number1 + number2);
// }



// function checkAnswer() {
//   document.querySelector('#check-answer').addEventListener('click', checkAnswer);
//   const userAnswer = Number(document.getElementById('answer').value);
//   const correctAnswer = correctAnswer();
//   const feedbackElement = document.getElementById('feedback');

//   if (userAnswer === correctAnswer) {
//     feedbackElement.style.color = 'green';
//     feedbackElement.textContent = 'Correct! Well done!';
//   } else {
//     feedbackElement.style.color = 'red';
//     feedbackElement.textContent = `Wrong answer. The correct answer is ${correctAnswer}. Try again!`;
//   }

//   // Clear the answer input field
//   document.getElementById('answer').value = '';
// }

// // Initial question generation
// generateQuestion();