
let player = {name:"Tunde",chips:"150"}
let isAlive = false
let cards = []
let sum = 0
let message = ""
let hasBlackJack = false
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')


playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1)

    if (randomNumber === 1){
        return 11
    }else if (randomNumber > 10) {
        return 10
    }else{
        return randomNumber
    }
}

function startGame() {

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
      renderGame()
    }


    function startGame() {
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard];
        sum = firstCard + secondCard;
        isAlive = true;
        renderGame();
          }

      

function renderGame() {

cardEl.textContent = "cards: "
for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
    console.log(cardEl.textContent)
}

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20){
    message = 'Do you want to draw a new card'
  }else if(sum === 21){
    message = 'You got blackjack!!!'
    hasBlackJack = true
  }else{
    message = 'You are out of the game!!!'
    isAlive = false
  }
  console.log(message)
  console.log(hasBlackJack)
  console.log(isAlive)
  
  messageEl.textContent = message

}



function newCard() {
if(isAlive && !hasBlackJack){
    console.log('drawing new card')
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

}