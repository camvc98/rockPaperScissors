

// creating the DOM
const playerScore = document.querySelector('#playerScore');
const choiceBtns = document.querySelectorAll('.btn')
let player;
const playerText= document.querySelector('#playerText');
const compText = document.querySelector('#compText');
let computer;

 let resultText = document.querySelector('#result');


 const options = ["rock", "paper", "scissors"];
 function getComputerChoice(){
 const computerChoice= options[Math.floor(Math.random()* options.length)];
 computer= computerChoice;
 
 }


choiceBtns.forEach(button => button.addEventListener('click', () => {
player = button.textContent;
button.classList.add('choiceMade');
setTimeout(() => {
    button.classList.remove('choiceMade')

},1500);



 getComputerChoice();
 playerText.textContent = 'Player : ' + player;
 compText.textContent = 'Computer : ' + computer;
resultText.textContent = 'Result : ' + checkWinner(player,computer);
}));


// setTimeout(function(){
//     button.classList.remove('choiceMade');


// paper.addEventListener('click',() =>{
// paper.classList.add('choiceMade')
// player = 'paper'
// console.log(player);
// computerChoice = getComputerChoice();
// console.log(checkWinner(player,computerChoice));
// });

// scissors.addEventListener('click', () =>{

// scissors.classList.add('choiceMade');
// player = 'scissors';
// console.log(player);
// computerChoice = getComputerChoice();
// console.log(checkWinner(player,computerChoice));

// })



//create an array of options 




function checkWinner(player,computerChoice){

if (player == computerChoice){
return "It's a Tie!"
}
else if (player == "rock" && computerChoice == "scissors"||
        player == "paper" && computerChoice == "rock" ||
        player =="scissors" && computerChoice == "paper") {

return "Player Wins This Round!"
}
else{
    return "Computer Wins This Round!"
}
}


// function playRound(player,computerChoice){
// const result = checkWinner(player,computerChoice);
// if (result == "It's a Tie!"){
// return "It's A Tie!"
// }
// else if (result == "Player Wins This Round!"){
//     return `Player Wins This Round! ${player} beats ${computerChoice}`
// }
// else{
//     return `Computer Wins This Round! ${computerChoice} beats ${player}`
// }


// }





// function playGame(){
//     console.log("WELCOME TO THE GAME");
    
    
//     let computerCounter = 0
//     let playerCounter = 0
// for (let i=0; i<5;i++){
// const player = getPlayerChoice();
// const computerChoice = getComputerChoice();


// if (checkWinner(player,computerChoice) == "Player Wins This Round"){
// playerCounter++
// }
// else if (checkWinner(player,computerChoice)== "It's a Tie!"){
// playerCounter++
// computerCounter++
// }
// else{
// computerCounter++

// }
// console.log(playRound(player,computerChoice));

// console.log(`Computer Score : ${computerCounter}`)
// console.log(`Player Score : ${playerCounter}`)
// console.log("--------------------------------")


// console.log("Game Over");

// if (computerCounter > playerCounter){
// console.log("COMPUTER WINS THE GAME")
// }
// else if (computerCounter == playerCounter){
// console.log("THE GAME WAS A TIE")
// }
// else{
// console.log("PLAYER WINS THE GAME")

// }







// console.log(`Computer Plays ${computerChoice}`);
// console.log(`Player Plays ${playerChoice}`);
// console.log(playRound(playerChoice, computerChoice));








// function length(){
// const text = "hello, world";
// let length = text.length;

// console.log(length)
// }


// length();