'use strict';
//selecting Elements
const player0El=document.querySelector(".player--0")
const player1El=document.querySelector(".player--1")

const score0El= document.querySelector("#score--0");
const score1El=document.querySelector("#score--1");
const diceEl=document.querySelector(".dice");
const currentScore0=document.querySelector("#current--0");
const currentScore1=document.querySelector("#current--1");



const btnNew=document.querySelector(".btn--new")
const btnROll=document.querySelector(".btn--roll")
const btnHold=document.querySelector(".btn--hold")

//starting Condition
const scores=[0,0]
let currentScore=0;
let activePlayer=0;
let playing=true;

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add("hidden");
const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;

    activePlayer=activePlayer===0?1:0;
    currentScore=0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}


//Dice Rolling Functionality
btnROll.addEventListener("click",function(){
    if(playing){
            //generating random dice rolling
    const dice= Math.trunc(Math.random()*6)+1;

    //display dice 
    diceEl.classList.remove("hidden");
    diceEl.src=`dice-${dice}.png`;
    
    // check dice for one
    if(dice!=1){
        //add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;

        
        

    }
    else{
        //switch player

        switchPlayer();




    }

    }


    

})


    // add hold functionality
    btnHold.addEventListener("click", function(){

    if(playing){
            // add current score to player score
    scores[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]
    
    //check if player score >=100
    if(scores[activePlayer]>=10){
        playing=false;
        console.log("you won")
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");

    }
    else{
        switchPlayer()
    }

    }


    
})


btnNew.addEventListener("click",function(){
    // Restart the Game
    activePlayer===0?1:0
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    const scores=[0,0]
    let currentScore=0;
    let activePlayer=0;
    let playing=true;
    currentScore1.textContent=0

    score0El.textContent=0;
    score1El.textContent=0;
    

    
        
})

 