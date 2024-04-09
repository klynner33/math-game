class MathGame {
  constructor() {
    this.equationElement = document.querySelector('#equation');
    this.answerElement = document.querySelector('#answer');
    this.resultElement = document.querySelector('#result');
    this.spriteLeft = document.querySelector('#sprite-left');
    this.spriteRight = document.querySelector('#sprite-right');
  }
  
  spriteFetch(){
    // const choice = document.querySelector('input').value
    // console.log(choice)
    const url = `https://pokeapi.co/api/v2/pokemon/pikachu`
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
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
            console.log(`error ${err}`)
        });
  }

  reset() {
   this.spriteLeft.innerHTML = '';
   this.spriteRight.innerHTML = '';
  }

  winMultiplicationOrDivision() {
    const hockeyWinArray = [];

    const imageWinContainer = document.getElementById('image-win-container');
   
    for (let i = 0; i < hockeyWinArray.length)
    let hockeyImg = document.createElement('img');
    hockeyImg.src = "hockey-img.jpg";
    imageWinContainer.appendChild(hockeyImg);

    const img1Urls = [];
          for(let i = 0; i < this.num1; i++) {
            img1Urls.push(data.sprites.front_default);
          }
  
          for (let i = 0; i < img1Urls.length; i++) {
            const img = document.createElement('img');
            img.src = img1Urls[i];
            this.spriteLeft.appendChild(img);
          }
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
          this.resultElement.textContent = `You are correct!
          You earn a character!`;
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
          this.winMultiplicationOrDivision();
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
      } else {
          this.resultElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
      }
  }
}

//ADDITION SELECTION
const nextButton = document.querySelector('#next');
const addButton = document.querySelector('#add-button');

addButton.addEventListener('click', function() {  
  const game = new AdditionMathGame();
  game.generateQuestion();
  
  
  document.querySelector('#check-answer').addEventListener('click', function() {
    game.checkAnswer();
    nextButton.focus();

  });

  document.querySelector('#answer').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector('#check-answer').click();
      nextButton.focus();
    }
  })

  nextButton.addEventListener('keyup', function () {
    addButton.click();
    this.answerElement.focus();
  })
})

// SUBTRACTION SELECTION

document.querySelector('#subtract-button').addEventListener('click', function() {  
  const game = new SubtractionMathGame();
  game.generateQuestion();
  document.querySelector('#check-answer').addEventListener('click', function() {
    game.checkAnswer();
  });
  document.querySelector('#answer').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector('#check-answer').click();
    }
  })
})

//MULTIPLICATION SELECTION

document.querySelector('#multiply-button').addEventListener('click', function() { 
  const game = new MultiplicationMathGame();
  game.generateQuestion();
  document.querySelector('#check-answer').addEventListener('click', function() {
    game.checkAnswer();
  });
  document.querySelector('#answer').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector('#check-answer').click();
    }
  })
})

//DIVISION SELECTION

document.querySelector('#divide-button').addEventListener('click', function() {  
  const game = new DivisionMathGame();
  game.generateQuestion();
  document.querySelector('#check-answer').addEventListener('click', function() {
    game.checkAnswer();
  });
  document.querySelector('#answer').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector('#check-answer').click();
    }
  })
})