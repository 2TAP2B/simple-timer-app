let prepTime, roundTime, intervalCount, currentInterval;
let prepTimer, roundTimer;

function startTimer() {
    prepTime = parseFloat(document.getElementById('prep-time').value);
    roundTime = parseFloat(document.getElementById('round-time').value);
    intervalCount = parseInt(document.getElementById('interval-count').value);
    currentInterval = 0;
    updateIntervalTimer();
    startPrepTimer();
}

function startPrepTimer() {
    if (currentInterval < intervalCount) {
        document.getElementById('prep-timer').innerText = prepTime.toFixed(2);
        prepTimer = setInterval(() => {
            prepTime -= 0.01;
            document.getElementById('prep-timer').innerText = prepTime.toFixed(2);
            if (prepTime <= 0) {
                clearInterval(prepTimer);
                document.getElementById('beep-sound').play();
                startRoundTimer();
            }
        }, 10);
    }
}

function startRoundTimer() {
    document.getElementById('round-timer').innerText = roundTime.toFixed(2);
    roundTimer = setInterval(() => {
        roundTime -= 0.01;
        document.getElementById('round-timer').innerText = roundTime.toFixed(2);
        if (roundTime <= 0) {
            clearInterval(roundTimer);
            document.getElementById('beep-sound').play();
            currentInterval++;
            updateIntervalTimer();
            prepTime = parseFloat(document.getElementById('prep-time').value);
            roundTime = parseFloat(document.getElementById('round-time').value);
            startPrepTimer();
        }
    }, 10);
}

function updateIntervalTimer() {
    document.getElementById('interval-timer').innerText = `${currentInterval + 1}/${intervalCount}`;
}

function stopTimer() {
    clearInterval(prepTimer);
    clearInterval(roundTimer);
}

function resetTimer() {
    stopTimer();
    document.getElementById('prep-time').value = 10;
    document.getElementById('round-time').value = 120;
    document.getElementById('interval-count').value = 4;
    document.getElementById('prep-timer').innerText = "";
    document.getElementById('round-timer').innerText = "";
    document.getElementById('interval-timer').innerText = "";
}
