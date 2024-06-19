class MathGame {
  static correctAnswers = 0;

  constructor() {
    this.equationElement = document.querySelector('#equation');
    this.answerElement = document.querySelector('#answer');
    this.resultElement = document.querySelector('#result');
    this.spriteLeft = document.querySelector('#sprite-left');
    this.spriteRight = document.querySelector('#sprite-right');
    this.newGameButton = document.querySelector('#new-game');
    this.imageWinContainer = document.querySelector('#image-win-container');
    // this.correctAnswers = 0;

    this.newGameButton.addEventListener('click', () => this.resetGame());
  }
  
  spriteFetch(){
    const url = `https://pokeapi.co/api/v2/pokemon/pikachu`
  
    fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data.sprites.front_default)
  
          const img1Urls = [];
          for(let i = 0; i < this.num1; i++) {
            img1Urls.push(data.sprites.front_default);
          }
  
          for (let i = 0; i < img1Urls.length; i++) {
            const img = document.createElement('img');
            img.src = img1Urls[i];
            this.spriteLeft.appendChild(img);
          }
          
          const img2Urls = [];
          for(let i = 0; i < this.num2; i++) {
            img2Urls.push(data.sprites.front_default);
          }
  
          for (let i = 0; i < img2Urls.length; i++) {
            const img = document.createElement('img');
            img.src = img2Urls[i];
            this.spriteRight.appendChild(img);
          }
          
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
  }

  reset() {
   this.spriteLeft.innerHTML = '';
   this.spriteRight.innerHTML = '';
  }

  resetGame() {
    MathGame.correctAnswers = 0;
    this.imageWinContainer.innerHTML = '';
    this.resultElement.textContent = '';
    this.equationElement.textContent = '';
    this.answerElement.value = '';
    this.spriteLeft.innerHTML = '';
    this.spriteRight.innerHTML = '';
    this.newGameButton.style.display = 'none';
  }

  addPokemonImage() {
    if (MathGame.correctAnswers <= 10) {
    const randomPokemonId = Math.floor(Math.random() * 898) + 1;

    const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const pokemonImg = document.createElement('img');
        pokemonImg.src = data.sprites.front_default;
        pokemonImg.classList.add('pokemon-img');
        this.imageWinContainer.appendChild(pokemonImg);
      })
      .catch(err => {
        console.log(`error ${err}`);
      });
    }
  }

  addHockeyImage() {
    if (MathGame.correctAnswers <= 10) {
    const hockeyImg = document.createElement('img');
    hockeyImg.classList.add('hockey-img');
    hockeyImg.src = "hockey-img.jpg";
    this.imageWinContainer.appendChild(hockeyImg);
    }
  }

  checkWinCondition() {
    if (MathGame.correctAnswers >= 10) {
      this.newGameButton.style.display = 'inline';
      this.resultElement.textContent = `You win!`;
    }
    console.log(MathGame.correctAnswers);
  }
}

// ADDITION GAME

class AdditionMathGame extends MathGame {
  generateQuestion() {
    this.reset();

    this.num1 = Math.floor(Math.random() * 11);
    this.num2 = Math.floor(Math.random() * 11);
  
    this.equationElement.textContent = `${this.num1} + ${this.num2} = `;

    this.answerElement.focus();
    this.answerElement.value = '';
    this.resultElement.textContent = '';

    this.spriteFetch();
    
  }

  checkAnswer() {
      let userAnswer = parseInt(this.answerElement.value);
      let correctAnswer = this.num1 + this.num2;

      if (userAnswer === correctAnswer) {
          this.resultElement.textContent = `You are correct! You earn a character!`;
          MathGame.correctAnswers += 1;
          this.addPokemonImage();
          this.checkWinCondition();
      } else {
          this.resultElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
      }
  }
}


//SUBTRACTION GAME

class SubtractionMathGame extends MathGame {
  generateQuestion() {
    this.reset();

    this.num1 = Math.floor(Math.random() * 11);
    this.num2 = Math.floor(Math.random() * 11);

    if(this.num1 > this.num2) {
    this.equationElement.textContent = `${this.num1} - ${this.num2} = `;
    
    this.answerElement.focus();
    this.answerElement.value = '';
    this.resultElement.textContent = '';

    this.spriteFetch();
    
    } else {
      this.generateQuestion();
    }
  }

  checkAnswer() {
      let userAnswer = parseInt(this.answerElement.value);
      let correctAnswer = this.num1 - this.num2;

      if (userAnswer === correctAnswer) {
          this.resultElement.textContent = `You are correct!
          You earn a character!`;
          MathGame.correctAnswers += 1;
          this.addPokemonImage();
          this.checkWinCondition();
      } else {
          this.resultElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
      }
  }
}

// MULTIPLICATION GAME

class MultiplicationMathGame extends MathGame {
  generateQuestion() {
    this.reset();

    this.num1 = Math.floor(Math.random() * 13);
    this.num2 = Math.floor(Math.random() * 13);
  
    this.equationElement.textContent = `${this.num1} x ${this.num2} = `;

    this.answerElement.focus();
    this.answerElement.value = '';
    this.resultElement.textContent = '';

  }

  checkAnswer() {
      let userAnswer = parseInt(this.answerElement.value);
      let correctAnswer = this.num1 * this.num2;

      if (userAnswer === correctAnswer) {
          this.resultElement.textContent = `You are correct!
          You earn a character!`;
          MathGame.correctAnswers += 1;
          this.addHockeyImage();
          this.checkWinCondition();
      } else {
          this.resultElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
      }
  }
}


//DIVISION GAME

class DivisionMathGame extends MathGame {
  generateQuestion() {
    this.reset();

    this.num1 = Math.floor(Math.random() * 145);
    this.num2 = Math.floor(Math.random() * 13);

    if (this.num1 > this.num2 && this.num1 % this.num2 === 0) {
      if (this.num1 <= 100 || (this.num2 === 11 || this.num2 === 12)) {
        this.equationElement.textContent = `${this.num1} / ${this.num2} = `;
      } else {
        this.generateQuestion();
      }
    } else {
      this.generateQuestion();
    }

    this.answerElement.focus();
    this.answerElement.value = '';
    this.resultElement.textContent = '';
    
  }

  checkAnswer() {
      let userAnswer = parseInt(this.answerElement.value);
      let correctAnswer = this.num1 / this.num2;

      if (userAnswer === correctAnswer) {
          this.resultElement.textContent = `You are correct!
          You earn a character!`;
          MathGame.correctAnswers += 1;
          this.addHockeyImage();
          this.checkWinCondition();
      } else {
          this.resultElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
      }
  }
}

let currentGame = null;

const addButton = document.querySelector('#add-button');
const subtractButton = document.querySelector('#subtract-button');
const multiplyButton = document.querySelector('#multiply-button');
const divideButton = document.querySelector('#divide-button');
const checkAnswerButton = document.querySelector('#check-answer');
const answerInput = document.querySelector('#answer');

// Common function to start a new game
function startGame(GameClass) {
  currentGame = new GameClass();
  currentGame.generateQuestion();
}

// Event listeners for starting new games
addButton.addEventListener('click', function() {
  startGame(AdditionMathGame);
});

subtractButton.addEventListener('click', function() {
  startGame(SubtractionMathGame);
});

multiplyButton.addEventListener('click', function() {
  startGame(MultiplicationMathGame);
});

divideButton.addEventListener('click', function() {
  startGame(DivisionMathGame);
});

// Single event listener for checking the answer
checkAnswerButton.addEventListener('click', function() {
  if (currentGame) {
    currentGame.checkAnswer();
  }
});

answerInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13 && currentGame) {
    event.preventDefault();
    currentGame.checkAnswer();
  }
});
