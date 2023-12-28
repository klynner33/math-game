class AdditionGame {
  constructor() {
      this.num1Element = document.getElementById('num1');
      this.num2Element = document.getElementById('num2');
      this.questionElement = document.getElementById('question');
      this.answerElement = document.getElementById('answer');
      this.resultElement = document.getElementById('result');

      this.generateQuestion();
  }

  generateQuestion() {
      this.num1 = Math.floor(Math.random() * 10);
      this.num2 = Math.floor(Math.random() * 10);

      this.num1Element.textContent = this.num1;
      this.num2Element.textContent = this.num2;
      this.answerElement.value = '';

      this.resultElement.textContent = '';
  }

  checkAnswer() {
      const userAnswer = parseInt(this.answerElement.value, 10);

      if (isNaN(userAnswer)) {
          this.resultElement.textContent = 'Please enter a valid number.';
      } else {
          const correctAnswer = this.num1 + this.num2;

          if (userAnswer === correctAnswer) {
              this.resultElement.textContent = 'Correct!';
          } else {
              this.resultElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
          }
      }
  }
}

const game = new AdditionGame();

const check = document.getElementById('check-answer');
// Add a click event listener to the button
check.addEventListener('click', function () {
  // Call the run method of your class
  game.checkAnswer();
});

const next = document.getElementById('next-question');
// Add a click event listener to the button
next.addEventListener('click', function () {
  // Call the run method of your class
  game.generateQuestion();
});