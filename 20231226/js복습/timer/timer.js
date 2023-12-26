function updateDateTime() {
    var currentDateElement = document.getElementById('currentDate');
    var timerElement = document.getElementById('timer');

    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var formattedDate = currentDate.toLocaleDateString();
    var formattedTime = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

    currentDateElement.textContent = '현재 날짜: ' + formattedDate;
    timerElement.textContent = '현재 시간: ' + formattedTime;

    // 올해 남은 시간 계산
    var endOfYear = new Date(currentDate.getFullYear() + 1, 0, 1); // 다음 해의 1월 1일
    var timeRemaining = endOfYear - currentDate;
    var remainingDays = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    var remainingHours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var remainingMinutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var remainingSeconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    timerElement.innerHTML += '<br>올해 남은 시간: ' + remainingDays + '일' + remainingHours + '시간 ' + remainingMinutes + '분 ' + remainingSeconds + '초';
}

function updateTimer() {
    setInterval(function() {
        updateDateTime();
    }, 1000);
}

// 초기화
updateDateTime();
updateTimer();