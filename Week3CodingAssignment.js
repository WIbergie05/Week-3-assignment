 var ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log("1.", ages);
//  let x = ages[0];
//  let y = ages[7];
//  console.log(y - x);
// var first = ages.at(0);
// console.log(first);

// var first = ages.at(0);
// var last = ages.at(-1);
// console.log(last);
// console.log(first);
// console.log(last - first);
console.log("1.a.", ages[ages.length - 1] - ages[0]);

//  for (let index = 0; index < ages.length; index++){
//     console.log("index:", index, "arraylength", ages.length);
//  }

 ages.push(19);
 console.log("1.b.", ages[ages.length - 1] - ages[0]);


function calculateAverage(ages) {
    var total = 0;
    var count = 0;
    ages.forEach(function(item, index){
        total += item;
        count++;
    });
    return total / count;
}
console.log("1.c.", calculateAverage(ages));

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log("2.", names);

function calculateAverage1(namespar) {
    var total = namespar.length;
    var count = 0;
    for (let index = 0; index < namespar.length; index++){
    console.log("index:", index, "arraylength", namespar.length, namespar[index].length);
    count += namespar[index].length
    console.log(count);
 }
    return count / total;
}
console.log("2.a", calculateAverage1(names));

let nameTogether = ""
for(let index = 0; index < names.length; index++ ){
    console.log("index:", index, "itrates through array", names[index]);
    nameTogether += names[index] + " ";
}

console.log("2.a", nameTogether);

 console.log("3", names[names.length -1]);
 console.log("4", names[0]);
 
//  var namesArray = ["Kelly", "Sam", "Kate"];
//  var nameLengths = [5, 3, 4];

let nameLengths = [];
 for (i = 0; i < names.length; i++) {
 nameLengths.push(names[i].length); 
 }
console.log("5", nameLengths);

let sumTogether = 0;
for (let nameLength of nameLengths) {
    sumTogether += nameLength;
  }
  console.log("6.", sumTogether);

  function myFunction(word, n) {
    let wordTogether = "";
    for (let i = 0; i < n; i++) {
        wordTogether += word; 
    }
    console.log("7.", wordTogether);
    return wordTogether;
  }
  myFunction("Hello", 3);

  let fullName = "";
  function myName(firstName, lastName) {
    fullName = firstName + " " + lastName;
    console.log("8.", fullName);
  return fullName;
}

myName("Erin", "Bergmann");

const arrayOfNumbers = [15, 36, 47, 55, 78, 99];
function sumNumbersArray(numbersArray) {
  let total = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    total += arrayOfNumbers[i];
}
if (total > 100) {
  console.log("9. True", total);
  return true;
} else {
  console.log("Your number is too low!");
  return false;
}
}
sumNumbersArray(arrayOfNumbers);

function numbers() {
    let arrayAverage = 0;
    for (let number of arrayOfNumbers) {
      arrayAverage += number;
    }
    average = arrayAverage / arrayOfNumbers.length; 
    console.log("10.", average);
  }
  numbers();

  let array1 = [5, 17, 27, 75];
let array2 = [9, 11, 26, 58];


function array(arrayParam1, arrayParam2) {
  let sumArray1 = 0;
  for (let number of arrayParam1) {
    
    sumArray1 += number; 
  }
  let arrAverage1 = sumArray1 / arrayParam1.length;
  let sumArray2 = 0;
  for (let number of arrayParam2) {
    sumArray2 += number;
  }

  let arrAverage2 = sumArray2 / arrayParam2.length;
  if (arrAverage1 > arrAverage2) {
    console.log("11", true, arrAverage1, arrAverage2);
    return true;
  } else {
    console.log("11", false, arrAverage1, arrAverage2);
    return false;
  }
}
array(array1, array2);

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket === 10.5) {
      console.log("12", isHotOutside);
      return true;
    }
  }
  willBuyDrink(true, 10.5);

  function allMovies(availableMovies, movieToken) {
    let totalMoviesRemaining = (availableMovies -= movieToken);
  
    if (totalMoviesRemaining > 0) {
      console.log(
        "13. ",
        "There are",
        totalMoviesRemaining,
        "movies remaining."
      );
    } else console.log("You watched all the movies!"); 
  }
  allMovies(5, 5); 