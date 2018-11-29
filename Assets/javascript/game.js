  /* Global Variables*/
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = []; // array to push user choices to
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
    
    // When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {
        
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
        //pushing user guess to guesses so far
        guessesSoFar.push(userGuess); 
        document.querySelector("#guesses").innerHTML = guessesSoFar;
        
        if (userGuess == computerGuess) {
            wins++;
            alert('Way to go! You\'ve guesesed corrrectly. You Won!');
            guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
            guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
            document.querySelector("#wins").innerHTML = wins; // Taking the tallies and displaying them in HTML    
        }
        else if (guessesLeft == 0){
            losses++;
            alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
            guessesLeft = 9;
            guessesSoFar.length = 0;
            document.querySelector("#losses").innerHTML = losses; // Taking the tallies and displaying them in HTML    
        }
        else if (userGuess !== computerGuess){
            guessesLeft--;  //decrementing the guesses left
            document.querySelector("#guessesLeft").innerHTML = guessesLeft; // Taking the tallies and displaying them in HTML 
        } 
    };       
           