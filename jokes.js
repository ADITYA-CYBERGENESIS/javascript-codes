const button = document.querySelector(".btn");
const container = document.querySelector(".container");
const jokeArea = document.querySelector(".joke");


button.addEventListener("click",()=>{
    container.classList.add("gap");
    button.innerHTML="ONE MORE JOKE";
    jokesgetter();
    
});
const jokesgetter=(()=>{
    let i=Math.floor((Math.random()*99)+1);
    check=0;
    if(i==check){
        i=Math.floor((Math.random()*99)+1);
        check=i;
        jokeArea.innerHTML=jokes[check];
    }
    else{
        check=i;
        jokeArea.innerHTML=jokes[i];
    }
});

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "I used to play piano by ear, but now I use my hands.",
    "What do you call a fish with no eyes? Fsh!",
    "I used to be a baker, but I couldn't make enough dough.",
    "I'm on a whiskey diet. I've lost three days already.",
    "Why couldn't the bicycle stand up by itself? Because it was two-tired!",
    "How do you organize a space party? You 'planet'!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a bear with no teeth? A gummy bear!",
    "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
    "I'm friends with all electricians. We have great current connections.",
    "Why don't oysters donate to charity? Because they are shellfish.",
    "I told my wife she was only drawing eyebrows on one side of her face. She looked surprised.",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "I used to be a baker, but I couldn't make enough dough.",
    "I'm on a whiskey diet. I've lost three days already.",
    "Why couldn't the bicycle stand up by itself? Because it was two-tired!",
    "How do you organize a space party? You 'planet'!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a bear with no teeth? A gummy bear!",
    "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
    "I'm friends with all electricians. We have great current connections.",
    "Why don't oysters donate to charity? Because they are shellfish.",
    "I told my wife she was only drawing eyebrows on one side of her face. She looked surprised.",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "I used to be a baker, but I couldn't make enough dough.",
    "I'm on a whiskey diet. I've lost three days already.",
    "Why couldn't the bicycle stand up by itself? Because it was two-tired!",
    "How do you organize a space party? You 'planet'!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a bear with no teeth? A gummy bear!",
    "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
    "I'm friends with all electricians. We have great current connections.",
    "Why don't oysters donate to charity? Because they are shellfish.",
    "I told my wife she was only drawing eyebrows on one side of her face. She looked surprised.",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "I used to be a baker, but I couldn't make enough dough.",
    "I'm on a whiskey diet. I've lost three days already.",
    "Why couldn't the bicycle stand up by itself? Because it was two-tired!",
    "How do you organize a space party? You 'planet'!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a bear with no teeth? A gummy bear!",
    "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
    "I'm friends with all electricians. We have great current connections.",
    "Why don't oysters donate to charity? Because they are shellfish.",
    "I told my wife she was only drawing eyebrows on one side of her face. She looked surprised.",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "I used to be a baker, but I couldn't make enough dough.",
    "I'm on a whiskey diet. I've lost three days already.",
    "Why couldn't the bicycle stand up by itself? Because it was two-tired!",
    "How do you organize a space party? You 'planet'!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a bear with no teeth? A gummy bear!",
    "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
    "I'm friends with all electricians. We have great current connections.",
    "Why don't oysters donate to charity? Because they are shellfish.",
    "I told my wife she was only drawing eyebrows on one side of her face. She looked surprised.",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "I used to be a baker, but I couldn't make enough dough.",
    "I'm on a whiskey diet. I've lost three days already.",
    "Why couldn't the bicycle stand up by itself? Because it was two-tired!",
    "How do you organize a space party? You 'planet'!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a bear with no teeth? A gummy bear!",
    "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
    "I'm friends with all electricians. We have great current connections.",
    "Why don't oysters donate to charity? Because they are shellfish.",
    "I told my wife she was only drawing eyebrows on one side of her face. She looked surprised.",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why did the tomato turn red? Because it saw the salad dressing!"
];
