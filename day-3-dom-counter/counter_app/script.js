const counterDisplay = document.getElementById("counter");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");
const statusText = document.getElementById("status");

let count = 0;

function updateUI() {
    counterDisplay.innerText = count;

    if (count > 0) {
        counterDisplay.style.color = "green";
        statusText.innerText = "Counter is Positive";
        statusText.style.color = "green";
    } 
    else if (count < 0) {
        counterDisplay.style.color = "red";
        statusText.innerText = "Counter is Negative";
        statusText.style.color = "red";
    } 
    else {
        counterDisplay.style.color = "black";
        statusText.innerText = "Counter is Neutral";
        statusText.style.color = "black";
    }
}

incrementBtn.addEventListener("click", () => {
    count++;
    updateUI();
});

decrementBtn.addEventListener("click", () => {
    count--;
    updateUI();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateUI();
});