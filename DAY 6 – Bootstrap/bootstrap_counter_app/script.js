const countDisplay = document.getElementById("count");
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

function updateUI() {
    countDisplay.innerText = count;

    if (count > 0) {
        countDisplay.className = "display-3 fw-bold text-success my-4";
    } else if (count < 0) {
        countDisplay.className = "display-3 fw-bold text-danger my-4";
    } else {
        countDisplay.className = "display-3 fw-bold text-primary my-4";
    }
}

incBtn.addEventListener("click", () => {
    count++;
    updateUI();
});

decBtn.addEventListener("click", () => {
    count--;
    updateUI();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateUI();
});
