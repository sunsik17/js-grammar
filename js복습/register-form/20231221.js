function submitForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (!username || !email || !password || !confirmPassword) {
        alert('모든 필드를 입력해주세요.');
        return;
    }

    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    var userData = {
        username: username,
        email: email,
        password: password
    };

    console.log(JSON.stringify(userData));


    alert('회원가입이 완료되었습니다!\n사용자 이름: ' + username + '\n이메일: ' + email);
}