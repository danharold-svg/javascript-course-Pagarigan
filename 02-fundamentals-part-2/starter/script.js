console.log("Part 2 function is ready!");
 
// Functions - Declarations and Expressions
 
function logger() {
   console.log("My name is Dalandan");
}
 
logger();
logger();
logger();
 
 
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
 
console.log(fruitProcessor(2, 5));
 
 
const juice1 = fruitProcessors(5, 0);
const juice2 = fruitProcessors(2, 4);
const juice3 = fruitProcessors(3, 2);
 
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
 
const age1 = calcAge(1991);
console.log(age1);  
 
function introduce(firstName, lastName, age) {
    const introduction =  `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}
 
console.log(introduce("Dan Harold", "Pagarigan", 20));
console.log(introduce("John"));
 
function yearUntilRetirement (birthYear, firstName) {
    const age = calcAge (birthYear);
    const retirement = 65 - age;
 
    if (retirement > 0 ) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} has already retired`;
    }
   
}
 
console.log(yearUntilRetirement(2000, "Dan"));
 
 
/// function scoppe
const globalVar = "I am global";
 
function testScope()  {
    const localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}
testScope();
console.log(globalVar);
 
////////////////////////////////////
// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins... (${avgDolphins} vs. ${avgKoalas})`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));



