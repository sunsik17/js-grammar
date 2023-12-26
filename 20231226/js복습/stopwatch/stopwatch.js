let stopwatchInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateStopwatch() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
    document.getElementById('stopwatch').innerText = formattedTime;
}

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(updateStopwatch, 10);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('stopwatch').innerText = '00:00:00.00';
}