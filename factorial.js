let number = prompt("enter a number: ");
number = parseInt(number);
let factorial = 1;
if (number >= 0) {
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log("factorial of " + number + " is" + factorial);
} else {
  console.log("no factorial for negative numbers");
}
