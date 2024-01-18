class AdditionGame {
  constructor() {
    this.num1Element = document.querySelector('#first-number');
    this.num2Element = document.querySelector('#second-number');
    this.answerElement = document.querySelector('#answer');
    this.resultElement = document.querySelector('#result');
  }

  generateQuestion() {
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);

    this.num2Element.textContent = this.num2;
    this.num1Element.textContent = this.num1;

    this.answerElement.focus();
    this.answerElement.value = '';
    this.resultElement.textContent = '';

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

  checkAnswer() {
    this.correctAnswer = this.num1 + this.num2;
    console.log(this.correctAnswer);
    this.userAnswer = this.answerElement.value;
    console.log(this.userAnswer);
    if (Number(this.userAnswer) === Number(this.correctAnswer)) {
    this.resultElement.textContent = `You are correct!
    You earn a character!`;
    }else {
    this.resultElement.textContent = `Incorrect. The correct answer is ${this.correctAnswer}.`;
    }
  }

  reset() {
   this.spriteLeft.innerHTML = '';
   this.spriteRight.innerHTML = '';
  }
}

const pokemonGame = new AdditionGame();

document.querySelector('#go').addEventListener('click', function() {
  // pokemonGame.reset();
  
  pokemonGame.generateQuestion();
  pokemonGame.spriteFetch();
  console.log(pokemonGame.num1)
})

document.querySelector('#check-answer').addEventListener('click', function() {
  pokemonGame.checkAnswer();
  pokemonGame.reset();

  // getFetch();
})

document.querySelector('#answer').addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('#check-answer').click();
  }
})