let randomNumber= Math.floor((Math.random()*100)+1)
let guessedNumber;
let guessCounter=0;
do{
    guessedNumber=parseInt(prompt("enter a number"));
    if(guessedNumber<randomNumber)
    {
        alert("Guessed number is lower than random number");
        guessCounter=guessCounter+1;
    }
    else if(guessedNumber>randomNumber){
        alert("Guessed number is higher than random number");
        guessCounter=guessCounter+1;
    }
    else if (guessedNumber==randomNumber){
        alert("you guessed the number YAY!!");
        guessCounter=guessCounter+1;
    }
    else {
        alert("enter a valid number and try again");
        guessCounter=guessCounter+1;
    }
}while(guessedNumber!=randomNumber)
let score = 100-guessCounter;

if(guessCounter==1){
    alert("Excellent you guessed in 1 try your score is "+score);
}
else if(guessCounter<=10){
    alert("Great you guessed in "+guessCounter+" try your score is "+score);
}
else if (guessCounter<=30){
    alert("Good you guessed in "+guessCounter+" try your score is "+score);
}
else if (guessCounter<=50){
    alert("you guessed in "+guessCounter+" try your score is "+score);
}
else if (guessCounter>50){
    alert("SHAME ON YOU!! you guessed in "+guessCounter+" try your score is "+score);
}
else{
    alert("You guessed in "+guessCounter+" try your score is "+score);
}
