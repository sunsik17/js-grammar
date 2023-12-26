function submitForm() {
    var userId = document.getElementById('userId').value;
    var phoneNumber = document.getElementById('phonNumber').value;
    var job = document.getElementById('jobs').value;
    var introduction = document.getElementById('introduction').value;

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (!username || !email || !password || !confirmPassword || userId || phoneNumber || job) {
        alert('자기소개를 제외한 모든 필드를 입력해주세요.');
        return;
    }

    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    var userData = {
        userId: userId,
        phoneNumber: phoneNumber,
        job: job,
        username: username,
        email: email,
        password: password,
        introduction: introduction
    };

    console.log(JSON.stringify(userData));


    alert('회원가입이 완료되었습니다!\n사용자 이름: ' + username + '\n이메일: ' + email);
}