// var customerNames = [];
// customerNames.push('Sam Smith');
// customerNames.push('Tommy Guns');

// console.log(customerNames[0]);

// for (let i = 0; i < customerNames.length; i++){
//     console.log(customerNames[i]);
// }

// for (name of customerNames) {
//     console.log(name);
// }

// function myFunction () {
//     for (let i = 0; i < 100; i++) {
//         console.log(i);
//     }
// }

// myFunction(); 

// function createFullName(firstName, lastName) {
//         console.log(firstName + ' ' + lastName);
// }


// var dvdPlayer = {
//     height: 3,
//     width: 18,
//     depth: 12,
//     weight: 7,
//     color: 'black',
//     dvdName: 'Mulan',
//     printDVDName: function() {
//         console.log(this.dvdName);
//     }
// };

// console.log(dvdPlayer.depth);
// dvdPlayer.printDVDName();

// let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nick'];
// let lengths = names.map(function(element) {
//     return element.length;
// });
// console.log(lengths);

// let sum = lengths.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// });
// console.log(sum);

// names.forEach(function(element){
//     console.log(element);
// });

// let evens = names.filter(function(element){
//     return element.length % 2 == 0;
// });
// console.log(evens);

// let removedElement = names.splice(1, 1);
// console.log(removedElement);

let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1
console.log(array1[2]);
// print the last element in array1
console.log(array1[array1.length-1]);
// add 16 and 3 to array1
array1.push(16, 3);
// sort the array, then print the 3rd element again
// did it change?
array1.sort();
console.log(array1[2]);

// create a variable called myTodoList that holds an empty array
let myTodoList = [];
// add three todo items to the array using a built-in array method
myTodoList.push("dishs", "laudry", "mop")
console.log(myTodoList);
// remove the second item in the array
myTodoList.splice(1,1);
console.log(myTodoList);
// create another array, yourTodoList, and add two todo items
var yourTodoList = ["homework", "make bed"];
// create another array, ourTodoList
var ourTodoList = [];
// combine myTodoList and yourTodoList into ourTodoList
ourTodoList = [...myTodoList, ...yourTodoList, "wash the car"];
console.log(ourTodoList);

// sort the following array from Z-A

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed


// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed



// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin