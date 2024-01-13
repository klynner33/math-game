//Fix API to be functional in this code
// document.querySelector('button').addEventListener('click', getFetch)

function spriteFetch(){
  // const choice = document.querySelector('input').value
  // console.log(choice)
  const url = `https://pokeapi.co/api/v2/pokemon/pikachu`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.sprites.front_default)

        const imgUrls = [];
        for(let i = 0; i < pokemonGame.num1; i++) {
          imgUrls.push(data.sprites.front_default);
        }

        const spriteLeft = document.querySelector('#sprite-left')
        for (let i = 0; i < imgUrls.length; i++) {
          const img = document.createElement('img');
          img.src = imgUrls[i];
          spriteLeft.appendChild(img);
        }
        
        const imageUrls = [];
        for(let i = 0; i < pokemonGame.num2; i++) {
          imageUrls.push(data.sprites.front_default);
        }

        const spriteRight = document.querySelector('#sprite-right')
        for (let i = 0; i < imageUrls.length; i++) {
          const img = document.createElement('img');
          img.src = imageUrls[i];
          spriteRight.appendChild(img);
        }
        
       
        // document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

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

const pokemonGame = new AdditionGame();

document.querySelector('#go').addEventListener('click', function() {
  pokemonGame.generateQuestion();
  spriteFetch();
  console.log(pokemonGame.num1)
})

document.querySelector('#check-answer').addEventListener('click', function() {
  pokemonGame.checkAnswer();
  // getFetch();
})

document.querySelector('#answer').addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('#check-answer').click();
  }
})