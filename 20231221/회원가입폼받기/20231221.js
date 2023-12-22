var input_list = ["이름 : ", "이메일 :", "비밀번호 : ", "모바일 :"]
for (let i = 0; i < input_list.length; i+=1) {
    var userInput = prompt(input_list[i].replace(":", "") + "을(를) 입력해 주세요");
    // 입력값이 비어있지 않다면
    if (userInput !== null && userInput !== "") {
        // 입력값을 사용하여 HTML 조작
        var newContent = "<p>" + input_list[i] + userInput + "</p>";
        document.body.innerHTML += newContent;
    } else {
        // 사용자가 취소 또는 빈 값을 입력한 경우
        alert("입력이 취소되었거나 유효하지 않습니다.");
    }
}