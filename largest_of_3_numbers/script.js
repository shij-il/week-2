function findLargest() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let num3 = Number(document.getElementById("num3").value);

  let result = document.getElementById("result");

  if (num1 === "" || num2 === "" || num3 === "") {
    result.innerText = "Please enter all numbers";
    return;
  }

  let largest;

  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }

  result.innerText = "Largest Number is: " + largest;
}