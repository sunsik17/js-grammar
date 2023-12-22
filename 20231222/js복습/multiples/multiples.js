let parentEle = document.getElementById('4multiples');
let multiples = document.createElement("div");
let count = 0;
let line = document.createElement("p");
for (let i = 1; i <= 500; i++) {
    if(i % 4 === 0) {
        line.textContent += i + " ";
        count++;

        if (count === 5) {
            multiples.appendChild(line);
            line = document.createElement("p");
            count = 0;
        }
    }
}
if (line) {
    multiples.appendChild(line)
}
parentEle.appendChild(multiples); 