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

function calculateAverage(namespar) {
    var total = namespar.length;
    var count = 0;
    for (let index = 0; index < namespar.length; index++){
    console.log("index:", index, "arraylength", namespar.length, namespar[index].length);
    count += namespar[index].length
    console.log(count);
 }
    return count / total;
}
console.log("2.a", calculateAverage(names));

let nameTogether = ""
for(let index = 0; index < names.length; index++ ){
    console.log("index:", index, "itrates through array", names[index]);
    nameTogether += names[index] + " ";
}

console.log("2.a", nameTogether);

//  console.log("3", names[names.length -1]);
//  console.log("4", names[0]);
 
//  var namesArray = ["Kelly", "Sam", "Kate"];
//  var nameLengths = [5, 3, 4];

let nameLengths = [];
 for (i = 0; i < names.length; i++) {
 nameLengths.push(names[i].length); 
 }
console.log("5", nameLengths);





