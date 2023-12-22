// prompt를 이용하여 사용자로부터 점수 입력 받기
var userInput = prompt("점수를 입력하세요:");

// 입력된 값이 null 또는 빈 문자열인지 확인
if (userInput !== null && userInput !== "") {
    // 입력된 값을 숫자로 변환
    var score = userInput;

    // 학점 판별 조건문
    var grade;
    while (score !== 9999) {
        if(score > 100) {
            alert('100점을 넘을 수 없습니다')
            score = prompt("점수를 입력하세요:");
            continue;   
        }
        if (score >= 90) {
            grade = 'A';
        } else if (score < 90 && score >= 80) {
            grade = 'B';
        } else if (score < 80 && score >= 70) {
            grade = 'C';
        } else if (score < 70 && score >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        // 결과를 HTML에 추가
        var resultElement = document.createElement("p");
        resultElement.textContent = '당신의 점수는 ' + score + '점이고 학점은 ' + grade + '입니다.';
        document.body.appendChild(resultElement);
        score = 9999;
    }
}