var userInput = prompt("나의 공격력은? (양의 정수)");
if (!parseInt(userInput)) {
    alert("f5를 눌러 재시작해주세요.");
} else {
    let MONSTER_HP = 100;
    let attk = parseInt(userInput);
    console.log(attk)

    let parentEle = document.getElementById('monster');
    let curMonsterHp = document.createElement("div");

    let line;
    let count = 1;
    while ((MONSTER_HP -= attk) > 0) {
        line = document.createElement("p");
        line.id = "count"
        line.textContent += "몬스터를 " + count + " 회 공격했다!";
        curMonsterHp.appendChild(line);    
        line = document.createElement("p");
        line.id = "curHP"
        line.textContent += "몬스터의 남은 HP는 " + MONSTER_HP + " 입니다!";
        curMonsterHp.appendChild(line);
        count++;
    }

    if (MONSTER_HP <= 0) {
        line = document.createElement("p");
        line.id = "count"
        line.textContent += "몬스터를 " + count + " 회 공격했다!";
        curMonsterHp.appendChild(line);    
        line = document.createElement("p");
        line.id = "curHP"
        line.textContent += "몬스터의 남은 HP는 " + 0 + " 입니다!";
        curMonsterHp.appendChild(line);
        count++;
    }
    parentEle.appendChild(curMonsterHp);

    line = document.createElement("h2");
    line.id = "complete"
    line.textContent += "몬스터 잡기 완료! 수고하셨습니다.";
    curMonsterHp.appendChild(line);
    parentEle.appendChild(curMonsterHp);
}
