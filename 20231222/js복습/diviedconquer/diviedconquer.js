const final_num = getRandom(1, 1000);

function getRandom(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function submitForm() {
    var number = document.getElementById('num').value;
    
    if (!number || !parseInt(number)) {
        alert('숫자를 입력해주세요');
        return;
    }

    if (number == final_num) {
        let p = document.getElementById("hint");
        p.textContent = '정답을 맞췄습니다. nice!'
        document.body.appendChild(p)
        return;
    }
    if (number > final_num) {
        let p = document.getElementById("hint");
        p.textContent = '정답보다 큰 숫자를 입력했습니다.'
        document.body.appendChild(p)
        return;
    }
    if (number < final_num) {
        let p = document.getElementById("hint");
        p.textContent = '정답보다 작은 숫자를 입력했습니다.'
        document.body.appendChild(p)
        return;
    }
}