class AdditionGame {
constructor() {
  this.num1Element = document.querySelector('#first-number');
  this.num2Element = document.querySelector('#second-number');
  this.answerElement = document.querySelector('#answer');
  this.resultElement =document.querySelector('#result');
}

generateQuestion() {
  this.num1 = Math.floor(Math.random() * 10);
  this.num2 = Math.floor(Math.random() * 10);

  this.num2Element.textContent = this.num2;
  this.num1Element.textContent = this.num1;

  this.answerElement.focus();
  this.answerElement.value = '';
  this.resultElement.textContent = '';
}

checkAnswer() {
  this.correctAnswer = this.num1 + this.num2;
  console.log(this.correctAnswer);
  this.userAnswer = this.answerElement.value;
  console.log(this.userAnswer);
  if (Number(this.userAnswer) === Number(this.correctAnswer)) {
    this.resultElement.textContent = `You are correct!`;
  }else {
    this.resultElement.textContent = `Incorrect. The correct answer is ${this.correctAnswer}.`;
}
}
}

const game = new AdditionGame();

document.querySelector('#go').addEventListener('click', function() {
  game.generateQuestion();
})

document.querySelector('#check-answer').addEventListener('click', function() {
  game.checkAnswer();
})

document.querySelector('#answer').addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('#check-answer').click();
  }
})