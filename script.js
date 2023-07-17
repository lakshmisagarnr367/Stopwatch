
window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset =document.getElementById("button-reset");
    var Interval;

    // to start the timer
    buttonStart.onclick= function (){
    Interval = setInterval(startTimer, 15);
    }

    // to stop the timer
    buttonStop.onclick = function (){
    clearInterval(Interval);
    }

    // to reset the timer
    buttonReset.onclick = function () {
    clearInterval (Interval);
    tens = "00";
    seconds= "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
}


function startTimer() {
    tens++;

    // case:1 : when tens is less than 9
    if(tens <= 9){
    appendTens.innerHTML = "0" + tens;
    console.log(tens + "One");
    }

    // case:2 : when tens is greater than 9
    if(tens > 9){
    appendTens.innerHTML = tens;
    console.log(tens + "Two");
    }

    // case:3 : when tens is greater than 99
    if(tens > 99) {
    console.log(tens + "Three");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
    }

    // case:4 : when seconds is greater than 9
    if(seconds > 9) {
    appendSeconds.innerHTML = seconds
    console.log(tens + "Four");
    }
    }
}
