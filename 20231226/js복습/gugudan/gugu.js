
const gugudan = document.getElementById("gugudan");
const container = document.createElement("div");

for (let num = 2; num < 10; num++) {
    let txt = document.createElement("h4");
    txt.textContent += (num + "단")
    container.appendChild(txt);
    for (let num2 = 1; num2 < 10; num2++) {
        txt = document.createElement("p");
        var tmp = num * num2;
        txt.textContent += (num + " x " + num2 + " = " + tmp)
        container.appendChild(txt);
    }

    gugudan.appendChild(container)
}