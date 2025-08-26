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
     console.log("=== MATH OPERATORS ===");
 
     const now = 2023;
     const ageDan = now - 2004;
     const ageJohn = now - 2001;
     console.log(ageDan, ageJohn);
 
     console.log(ageDan * 2, ageJohn / 10, 2 ** 3); // Exponentiation operator
     console.log("Math Operations");
     console.log("Addition:", ageDan + ageJohn);
     console.log("Subtraction:", ageDan - ageJohn);
     console.log("Multiplication:", ageDan * ageJohn);
     console.log("Division:", ageDan / ageJohn);
     console.log("Exponentiation:", 2 ** 3);
 
     // Math with Strings
     const firstName = "Dan";
     const lastName = "Pagarigan";
     console.log(firstName + " " + lastName);
 
     console.log("Hello " + "World" + "!");
 
 
     //Assignment Operators
     console.log("=== ASSIGNMENT OPERATORS ===");
 
     let x = 10 + 5;
     console.log("x starts as:", x);
 
     x += 10;
     console.log("x starts as:", x);
 
     x *= 4;
     console.log("x starts as:", x);
 
     x /= 2;
     console.log("x starts as:", x);
 
     x++;
     console.log("x starts as:", x);
 
     x--;
     console.log("x starts as:", x);
 
     x++;
     console.log("x starts as:", x);
 
     // Comparison Operators
     console.log("=== COMPARISON OPERATORS ===");
     console.log("Age comparison");
 
     console.log(ageJohn > ageDan); // Greater than
     console.log(ageDan >= 18); // Less than
     console.log(ageJohn < 30); // Greater than or equal to
     console.log(ageDan <= ageJohn); // Less than or equal to
 
 
     console.log("Number comparisons:");
     console.log(25 > 20); // true
     console.log(15 < 10); // false
     console.log(18 >= 18); // true
     console.log(16 <= 15); // false
 
     const isFullAge = ageDan >= 18;
    console.log("Is Dan adult age?", isFullAge);
 
     console.log("Complex comparisons:");
     console.log(now - 2004 > now - 2001); // true
 
    let z, y;
    z = y = 25 - 10 - 5; // Assigning the result of the expression to both z and y
     console.log(z, y);
 
     const averageAge = (ageDan + ageJohn) / 2;
     console.log(ageDan, ageJohn, averageAge);
 
     //Coding
     //Test Data 1
     const massDan = 52;
     const heightDan = 1.60;
     const massJohn = 60;
     const heightJohn = 1.75;
 
     const bmiDan= massDan / (heightDan ** 2);
     const bmiJohn = massJohn / (heightJohn ** 2);
 
     const DanHigherBMI = bmiDan > bmiJohn;
 
     console.log(bmiDan);
     console.log(bmiJohn);
 
     console.log(DanHigherBMI);