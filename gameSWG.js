alert("snake,water,gun \nif you win a game your score will increased by 1\nif computer wins a game its score will increased by 1\nif their draw then no ones score will be increased or decreased")
let compScore=0;
let userScore=0;
do {
    while(true){
let userInput=(prompt("enter snake , water or gun")).toLowerCase();
if(userInput=="snake"||userInput=="gun"||userInput=="water" ){
let random = Math.floor((Math.random() * 3)+1);
if(userInput=="snake"&&random==2){
    alert("you win computer lost")
    userScore++
    break;
}
else if(userInput=="snake"&&random==3){
    compScore++
    alert("you lost computer win")  
    break;
}
else if(userInput=="water"&&random==1){
    compScore++
    alert("you lost computer win") 
    break;
}
else if(userInput=="water"&&random==3){
    alert("you win computer lost") 
    userScore++
    break;   
}
else if(userInput=="gun"&&random==1){
    alert("you win computer lost") 
    userScore++
    break;
}
else if(userInput=="gun"&&random==2){
    compScore++
    alert("you lost computer win") 
    break;
}
else {
   alert("draw")
   break;
}}
else{
    alert("try again and write snake water or gun")};
}
confirmation = confirm("Do you want to play again");
}while (confirmation);
let result;
if (compScore<userScore){
    result="YOU WON"
}
else if (compScore>userScore){
    result="COMPUTER WON"
}
else{
    result="DRAW"
}

alert("RESULT\n"+"YOUR SCORE--> "+userScore+"| "+result+" |" + compScore +" <--COMPUTER\'S SCORE");

// snake water =snake
// water gun = water
// gun snake =gun
// comp snake=1 comp water=2 comp gun=3