'use strict';

const player0El= document.querySelector('.player--0');
const player1El= document.querySelector('.player--1');
const score0El= document.querySelector('#score--0');
const score1El= document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');
let currentScore=0;
let activeplayer=0;
const scores=[0,0]
btnRoll.addEventListener("click",function(){
    const dice = Math.trunc(Math.random()*6) +1;
    diceEl.classList.remove("hidden");
    diceEl.src=`dice-${dice}.png`;
    if(dice!=1){
        currentScore+=dice;
        document.getElementById(`current--${activeplayer}`).textContent=currentScore;
        // current0El.innerHTML=currentScore;
    }else{
        switchPlayer()
    }
})
btnHold.addEventListener("click",function(){
    scores[activeplayer]+=currentScore;
    document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];
    if (scores[activeplayer] >= 100) {
        // Finish the game
        playing = false;
        diceEl.classList.add('hidden');
  
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
      } else {
        // Switch to the next player
        switchPlayer();
      }
    

})
const switchPlayer=()=>{
    document.getElementById(`current--${activeplayer}`).textContent=0;
        activeplayer=activeplayer==0? 1:0;
        currentScore=0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}