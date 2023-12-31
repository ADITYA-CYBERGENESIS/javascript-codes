// let challenge='30 days of JavaScript';
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(' ')[0]);
// console.log((10<10)?"its true":'its false')

// marks={
//     aditya:100,
// }

// for(let a in marks){
//     console.log(a ,marks[a])
// 
// for(let a of challenge){
//     console.log(a)
// }

// let c = 10;

// while(c<=100){
//     console.log("i love css")
//     c++;
// }
// let c = 10;

// do{
//     console.log("i love css")
//     c++;
// }while(c<=100)


// for (i=0;i<=3;i++){
//     console.log("marks of "+i+" is "+marks[i])
// }
// let a=1;
// while(a==10){
// let a=parseInt(prompt("enter a number"));
// }

// let a =parseInt(prompt('enter a number'));

// if (a==10){
//     alert('thankyou')
// }
// else{
//     let a =parseInt(prompt('try again'));
// }
// var marks={
//     harry:98,
//     rohan:70,
//     aakash:73
// };
// var markkeys=Object.keys(marks);
// for (let a = 0;a<markkeys.length;a++){
//     console.log("marks of "+markkeys[a]+" is "+marks[markkeys[a]]);
// };
// for (let a in marks){
//     console.log("marks of "+a+" is "+marks[a]);
// }
// let userInput;
// while(true){
//     let userInput=parseInt(prompt("enter a number"))
//     if (userInput==45){
//         console.log("done thankyou");
//         break;
//     }
//     else{
//         console.log("tryagain")
//     }
// }
// let a=4;
// let b=5;
// let c=2;
// let d=3;
// let e=4;

// function gettingit(a,b,c,d,e){
//     let added = a+b+c+d+e;
//     console.log(added/5)
    
// }

// let superStr=`heal a patriarch`;

// console.log(superStr.length);
// console.log(superStr.toUpperCase());
// console.log(superStr.toLowerCase());
// console.log(superStr.slice(0,6));
// console.log(superStr.trim());
// // console.log(superStr.trim(a));
// console.log(superStr.replace("heal","kill"));

//ARRAY
// let a = [1,2,3,4,5,6];
// let userInput;
// // do{
// //     userInput=parseInt(prompt("enter a number"));
// //     a.push(userInput);
// // }while(userInput!=0)


// alert(a);
// console.log(a);
// const people = [
//     {
//       name: 'Florin',
//       age: 26
//     },
//     {
//       name: 'Ivan',
//       age: 18
//     },
//     {
//       name: 'Jai',
//       age: 15
//     }
//   ];
  
//   const adults = people.filter(a=>a.age >= 18);
//   console.log(adults);

//   const functionName = parameter or () or (paramater1,paramater2) => expression or {logic};

// givenArray=[1,2,3,4,5,6,7,8,9,10,20,30,40,50];
// let newArray= givenArray.map((value)=>{
//   return value*value
// });
// console.log(newArray);
 

// let userInput=parseInt(prompt("enter a number"));
// if (userInput>4){
//     location.href="https://www.google.com";
// }

// let userInput=prompt("enter any colour");
// document.body.style.background=userInput
const selectAll = document.querySelectorAll('li');
console.log(selectAll);
for(i=0;i<=selectAll.length;i++){
selectAll[i].style.background="yellow";
}