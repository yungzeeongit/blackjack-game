
let player = {name:"Tunde",chips:150}
let state = {win:0, loss:0}
let isAlive = false
let cards = []
let sum = 0
let message = ""
let hasBlackJack = false
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')
let countStoreEl = document.getElementById('store-count') 
let winCount = document.getElementById('win-count')
let lossCount = document.getElementById('loss-count') 
const startBtn = document.getElementById('start-btn')


/* eventlisteners */

startBtn.addEventListener('click',function() {
  if (cardEl.textContent === `Cards:` || messageEl.textContent === `You are out of the game!!!` || messageEl.textContent === `You got blackjack!!!`)
    startGame()
})


/* eventlisteners */


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

      if(player.chips > 0){
      
      
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard];
        sum = firstCard + secondCard;
        isAlive = true;
        
       
      }else if(player.chips <= 0){
player = {name:"Tunde",chips:150 }
 state = {win:0, loss:0}
 isAlive = false
 cards = []
 sum = 0
 message = ""
 hasBlackJack = false
      }
      renderGame();
      playerEl.textContent = `${player.name} : $${player.chips}`
      winCount.textContent = `Rounds won: ${state.win}`
      lossCount.textContent = `Rounds lost: ${state.loss}`
          }

      

function renderGame() {
cardEl.textContent = "cards: "
for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
}

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20){
    message = 'Do you want to draw a new card'
  }else if(sum === 21){
    message = 'You got blackjack!!!'
    hasBlackJack = true
    player.chips += 10
    state.win += 1
  }else{
    message = 'You are out of the game!!!'
    isAlive = false
    player.chips -= 10
    state.loss += 1
  }
                 
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
hasBlackJack = false
}


function closeRound() {
  
}