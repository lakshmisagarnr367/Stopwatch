window.onload = function() {
    var seconds = 0;
    var tens = 0;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    // to start the timer
    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10); // Reduce the interval for smoother animation
    };

    // to stop the timer
    buttonStop.onclick = function() {
        clearInterval(Interval);
    };

    // to reset the timer
    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "00";
    };

    function startTimer() {
        tens++;

        // Handle tens and seconds formatting
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        } else if (tens <= 99) {
            appendTens.innerHTML = tens;
        } else {
            seconds++;
            appendSeconds.innerHTML = seconds <= 9 ? "0" + seconds : seconds;
            tens = 0;
            appendTens.innerHTML = "00";
        }

        // Stop the timer after a specific time (we can modify this condition based on our needs)
        if (seconds >= 60) {
            clearInterval(Interval);
        }
    }
};
