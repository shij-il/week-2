function generateTable() {
    let num = document.getElementById("number").value;
    let resultDiv = document.getElementById("result");

    if (num === "") {
        resultDiv.innerHTML = "<p>Please enter a number</p>";
        return;
    }

    let tableHTML = "";

    for (let i = 1; i <= 10; i++) {
        tableHTML += `<p>${num} × ${i} = ${num * i}</p>`;
    }

    resultDiv.innerHTML = tableHTML;
}