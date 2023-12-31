let number = prompt("enter a four digit number ");
number = parseInt(number);

if (isNaN(number) || number < 1000 || number > 9999) {
  console.log("enter a four digit number");
} else {
  let originalNumber = number;
  let sum = 0;

  while (number > 0) {
    let digit = number % 10;
    sum += Math.pow(digit, 4);
    number = Math.floor(number / 10);
  }

  if (sum === originalNumber) {
    console.log(originalNumber + " is armstrong number.");
  } else {
    console.log(originalNumber + " is not armstrong number.");
  }
}
