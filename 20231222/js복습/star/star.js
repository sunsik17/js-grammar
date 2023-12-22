let parentEle = document.getElementById('star1');
let star1 = document.createElement("div");

for (let i = 0; i < 5; i++) {
    let line = document.createElement("p"); 
    for (let j = 0; j <= i; j++) {
        line.textContent += "*";
    }
    star1.appendChild(line); 
}

parentEle.appendChild(star1); 

let parentEle2 = document.getElementById('star2');
let star2 = document.createElement("div");

for (let i = 0; i < 5; i++) {
    let line = document.createElement("p"); 
    for (let j = 0; j <= i; j++) {
        line.textContent += "*";
    }
    star2.appendChild(line); 
}
for (let i = 5; i > 0; i--) {
    let line = document.createElement("p"); 
    for (let j = 0; j <= i; j++) {
        line.textContent += "*";
    }
    star2.appendChild(line); 
}

parentEle2.appendChild(star2); 

let parentEle3 = document.getElementById('star3');
let star3 = document.createElement("div");

const half = parseInt(10 / 2);

for (let i = 1; i <= half; i++) {
    let line = document.createElement("p"); 
    for (let j = 0; j < half - i; j++) {
        line.textContent += "\u00A0";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
        line.textContent += "*";
    }
    star3.appendChild(line);
}
for (let i = 4; i > 0; i--) {
    let line = document.createElement("p"); 
    for (let j = 0; j < 5 - i; j++) {
        line.textContent += "\u00A0";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
        line.textContent += "*";
    }
    star3.appendChild(line);
}
parentEle3.appendChild(star3); 