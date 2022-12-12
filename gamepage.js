// random value generated

var y=Math.floor(Math.random()*10+1)

// counting the number of guesses

var x=document.getElementById("guessField").value;

// made for correct Guess

if(x==y){

    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN"+guess+"GUESS");
    guess=1;
}
  
// function for number guessed by user     
else if (x > y){

    guess++;
    alert("OPS SORRY!! TRY  A SMALLER NUMBER")

}
else{

    guess++;
    alert("OPS SORRY!! TRY  A GREATER NUMBER")
    
}

function play_again(){

    y=Math.floor(Math.random()*10+1)   
}