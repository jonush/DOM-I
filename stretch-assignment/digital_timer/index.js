const tens = document.querySelector("#secondTens");
const ones = document.querySelector("#secondOnes");
const hundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

let incrementer = setInterval(increment(), 10);
let hundred = 0;
function increment() {
    hundred += 1;
    if (hundred > 9) {
        hundred = 0;
    }
}
increment();
hundreds.textContent = hundred;

msTens.setInterval(start(), 1);
function start() {
    let mst = 0;
    mst += 1;
    if(mst > 9) {
        mst = 0;
    }
}
start();
msTens.textContent = mst;
