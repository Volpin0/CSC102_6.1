function PlayCraps() {
    // this is a one line comment
    /*this is function to mplau craps in game.html
    rules for craps
    Roll two dice
    add up to 7 or 11, you lose.
    if they are doubles ane eve you win!
    everything else is a push
    */
    //Jakil W
    console.log("playCraps() started");
    //Roll dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;

    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;

    //look for loss
    if (sum == 7 || sum == 11) {
        console.log("loss");
        document.getElementById("gameRes").innerHTML = " You lost! Hold this <h1>L</h1>";
    } else if(die1 == die2 && die1 % 2 == 0){
        console.log("win");
        document.getElementById("gameRes").innerHTML = " I think you cheated but here have this <h1>W</h1>";
    } else{
        console.log("tie");
        document.getElementById("gameRes").innerHTML = " That was close, run it back!";


    }

    //look for win

    //everything else is a push

}