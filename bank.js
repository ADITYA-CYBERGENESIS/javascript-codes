var amount = 15000;
var total = 0; //total is not calculated here//
var tax = amount * 0.02;

if (amount < 10000){
    total = amount + amount*0.05 - tax;
}
else {
    total = amount + amount*0.05 - tax;
}
console.log(total);