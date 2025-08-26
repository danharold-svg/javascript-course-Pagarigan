// // // // JavaScript Fundamentals - Part 1
// // // // We'll write our code here!
 
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);
 
// console.log("=== VARIABLE ===");
 
// let firstName ="Dan";
// console.log(firstName);
 
// let age = 21;
// console.log(age);
// age = 22;
// console.log(age);
 
// const birthYear = 2004;
// console.log(birthYear);
 
// const PI   = 3.1415;
// console.log(PI);
 
// var job = "programmer";
// job = "teacher";
// console.log(job);
 
// const country = "Philippines";
// const language = "Filipino";
 
// age = 25;
// age = 30;
 
// // let firstName
// // let myCurrentJob
 
// console.log(" === DATA TYPES ===");
 
// Number
// let id = 2023103213;
// console.log(id);
// console.log(typeof id);
 
// String
// let lastName = "Pagarigan";
// console.log(lastName);
// console.log(typeof lastName);
 
// Boolean
// let isJavaScriptFun = true;
// console.log(isJavaScriptFun);
// console.log(typeof isJavaScriptFun);
 
// Undefined
// console.log(year);
// console.log(typeof year);
 
// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable);
 
// dynamicVariable = "Is now String";
// console.log(dynamicVariable, typeof dynamicVariable);
 
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);
 


// // PART 2
// //Basic Operators - Math Operators
 
// newFunction();
 
 
 
// function newFunction() {
    //  console.log("=== MATH OPERATORS ===");
 
    //  const now = 2023;
    //  const ageDan = now - 2004;
    //  const ageJohn = now - 2001;
    //  console.log(ageDan, ageJohn);
 
    //  console.log(ageDan * 2, ageJohn / 10, 2 ** 3); // Exponentiation operator
    //  console.log("Math Operations");
    //  console.log("Addition:", ageDan + ageJohn);
    //  console.log("Subtraction:", ageDan - ageJohn);
    //  console.log("Multiplication:", ageDan * ageJohn);
    //  console.log("Division:", ageDan / ageJohn);
    //  console.log("Exponentiation:", 2 ** 3);
 
    //  // Math with Strings
    //  const firstName = "Dan";
    //  const lastName = "Pagarigan";
    //  console.log(firstName + " " + lastName);
 
    //  console.log("Hello " + "World" + "!");
 
 
    //  //Assignment Operators
    //  console.log("=== ASSIGNMENT OPERATORS ===");
 
    //  let x = 10 + 5;
    //  console.log("x starts as:", x);
 
    //  x += 10;
    //  console.log("x starts as:", x);
 
    //  x *= 4;
    //  console.log("x starts as:", x);
 
    //  x /= 2;
    //  console.log("x starts as:", x);
 
    //  x++;
    //  console.log("x starts as:", x);
 
    //  x--;
    //  console.log("x starts as:", x);
 
    //  x++;
    //  console.log("x starts as:", x);
 
    //  // Comparison Operators
    //  console.log("=== COMPARISON OPERATORS ===");
    //  console.log("Age comparison");
 
    //  console.log(ageJohn > ageDan); // Greater than
    //  console.log(ageDan >= 18); // Less than
    //  console.log(ageJohn < 30); // Greater than or equal to
    //  console.log(ageDan <= ageJohn); // Less than or equal to
 
 
    //  console.log("Number comparisons:");
    //  console.log(25 > 20); // true
    //  console.log(15 < 10); // false
    //  console.log(18 >= 18); // true
    //  console.log(16 <= 15); // false
 
    //  const isFullAge = ageDan >= 18;
    // console.log("Is Dan adult age?", isFullAge);
 
    //  console.log("Complex comparisons:");
    //  console.log(now - 2004 > now - 2001); // true
 
    // let z, y;
    // z = y = 25 - 10 - 5; // Assigning the result of the expression to both z and y
    //  console.log(z, y);
 
    //  const averageAge = (ageDan + ageJohn) / 2;
    //  console.log(ageDan, ageJohn, averageAge);
 
    //  //Coding
    //  //Test Data 1
    //  const massDan = 52;
    //  const heightDan = 1.60;
    //  const massJohn = 60;
    //  const heightJohn = 1.75;
 
    //  const bmiDan= massDan / (heightDan ** 2);
    //  const bmiJohn = massJohn / (heightJohn ** 2);
 
    //  const DanHigherBMI = bmiDan > bmiJohn;
 
    //  console.log(bmiDan);
    //  console.log(bmiJohn);
 
    //  console.log(DanHigherBMI);

//  // PART 3

//     const firstName = "Dan Harold";
// const lastName = "Pagarigan";
// const job = "Developer";
// const birthYear = 2004;
// const year = 2025;
 
// const dan = "I'm " + firstName + " " + lastName + ", a " + job + ". I was born in " + birthYear + ", and I'm currently " + (year - birthYear) + " years old.";
// console.log(dan);
 
 
// const danNew = `I'm ${firstName} ${lastName}, a ${job}. I was born in ${birthYear}, and I'm currently ${year - birthYear} years old.`;  
// console.log(danNew);
 
// const danNew2 = `I'm ${firstName} ${lastName}, a ${job}. I was born in ${birthYear}, and I'm currently ${year - birthYear} years old.`;
// console.log(danNew2);
 
// console.log(`I'm ${2025 - 1972} years old.`);
// console.log( `Math works here: ${2 + 3} equals five`);
 
// // IF-ELSE STATEMENTS
// console.log("=== IF-ELSE STATEMENTS ===");
 
// const age = 20;
 
// if (age >= 60) {
//     console.log("You are an Senior Citizen.");
 
// } else if(age >= 18) {
//     console.log("You are an Adult.");
// } else if (age >= 13) {
//     console.log("You are a Teenager.");
// } else {
//     console.log("You are a Child.");
// }
 
 
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Dan Harold"));
// console.log(Boolean({}));
// console.log(Boolean(""));
 
// ////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator
 
// const massDan = 78;
// const heightDan = 1.69;
// const massHarold = 92;
// const heightHarold = 1.95;
 
// const   bmiDan = massDan / (heightDan ** 2);
// const   BMIHarold = massHarold / (heightHarold * heightHarold);
// console.log(bmiDan, BMIHarold);
 
 
// if(bmiDan > BMIHarold) {
//     console.log(`Jpdc's BMI (${bmiDan.toFixed(2)}) is higher than Harold's (${BMIHarold.toFixed(2)})!`);
// } else {
//     console.log(`Harold's BMI (${BMIHarold.toFixed(2)}) is higher than Dan's (${bmiDan.toFixed(2)})!`);
// }  


// // PART 4


console.log("=== TYPE CONVERSION ===");
const inputYear = "1991";
console.log(Number(inputYear), inputYear); 
console.log(Number(inputYear) + 18); 

console.log(Number("Jonas")); 
console.log(typeof NaN); 

console.log(String(23), 23); 
console.log(typeof String(23)); 


console.log("=== TYPE COERCION ===");
console.log("I am " + 23 + " years old"); 
console.log("23" - "10" - 3); 
console.log("23" / "2"); 
console.log("23" * "2"); 


console.log("=== TRICKY EXAMPLES ===");
let n = "1" + 1; 
n = n - 1; 
console.log(n); 

console.log(2 + 3 + 4 + "5"); 
console.log("10" - "4" - "3" - 2 + "5"); 


console.log("=== EXERCISE 1: CONVERSION DETECTIVE ===");
console.log("5" + 2); 
console.log("5" - 2); 
console.log("5" * 2); 
console.log("5" / 2); 


const userAge = "25";
const convertedAge = Number(userAge);
console.log(convertedAge, typeof convertedAge); 

const userScore = 95;
const convertedScore = String(userScore);
console.log(convertedScore, typeof convertedScore); 



console.log("=== EXERCISE 2: FIX THE BUG ===");

const num1 = "10"; 
const num2 = "5"; 


const buggySum = num1 + num2;
console.log(`Buggy Sum: ${buggySum}`); 

const fixedSum = Number(num1) + Number(num2);
console.log(`Fixed Sum: ${fixedSum}`); 


console.log("=== EQUALITY OPERATORS ===");
const age = "18";
console.log("18" === 18); 
console.log("18" == 18);  
console.log(18 === 18);  


console.log("0" == 0);     
console.log(0 == false);   
console.log("0" == false); 
console.log(null == undefined); 


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite, typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}


if (favourite !== 23) console.log("Why not 23?");


console.log("=== EXERCISE 1: EQUALITY DETECTIVE ===");
console.log(5 === "5");   
console.log(5 == "5");   
console.log(true === 1);  
console.log(true == 1);   
console.log(false === 0); 
console.log(false == 0);  



console.log("=== EXERCISE 2: FIX LOGIN SYSTEM ===");

const username = "admin"; 
const password = "1234";  


if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}


console.log("=== LOGICAL OPERATORS ===");
const hasDriversLicense = true; 
const hasGoodVision = true;     
const isTired = false;          

console.log(hasDriversLicense && hasGoodVision); 
console.log(hasDriversLicense || hasGoodVision); 
console.log(!hasDriversLicense);                 

console.log(hasDriversLicense && hasGoodVision && !isTired); 

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}


const age2 = 20;
const hasPermission = true;
const hasExperience = false;

if ((age2 >= 18 || hasPermission) && hasExperience) {
  console.log("Approved to drive");
} else {
  console.log("Not approved to drive");
}


console.log("=== EXERCISE 1: CLUB ENTRY ===");
const age3 = 19;
const hasID = true;
const isVIP = false;

if ((age3 >= 21 && hasID) || isVIP) {
  console.log('Welcome to the club!');
} else {
  console.log('Sorry, you cannot enter');
}


console.log("=== EXERCISE 2: WEATHER ADVISOR ===");
const temperature = 25;
const isRaining = false;
const isWindy = true;

if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
  console.log("Perfect day! Enjoy outdoors.");
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
  console.log("Good day. You can go outside.");
} else {
  console.log("Better stay inside today.");
}


console.log("=== TERNARY OPERATOR ===");
const age4 = 23;
const drink = age4 >= 18 ? "wine " : "water ";
console.log(drink);


let drink2;
if (age4 >= 18) {
  drink2 = "wine ";
} else {
  drink2 = "water ";
}
console.log(drink2);


console.log(`I like to drink ${age4 >= 18 ? "wine " : "water "}`);


console.log("=== EXERCISE 1: TERNARY PRACTICE ===");
const isLoggedIn = true;
const welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";
console.log(welcomeMessage);

const isPremium = false;
const price = isPremium ? 100 * 0.8 : 100;
console.log(price);



console.log("=== EXERCISE 2: SMART RESPONSES ===");
const score = 85;
const weather = "sunny";
const battery = 15;

console.log(`Your score: ${score} (${score >= 60 ? "Passed" : "Failed"})`);
console.log(`Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`);
console.log(`Battery: ${battery}% (${battery <= 20 ? "Low battery warning" : "Battery OK"})`);


// Final Challenge: Tip Calculator

console.log("=== FINAL CHALLENGE: TIP CALCULATOR ===");

const testBills = [275, 40, 430];

for (const bill of testBills) {

  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  const total = bill + tip;
  
  console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
}