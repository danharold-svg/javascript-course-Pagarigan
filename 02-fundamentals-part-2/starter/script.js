// console.log("Part 2 function is ready!");
 
// // Functions - Declarations and Expressions
 
// function logger() {
//    console.log("My name is Dalandan");
// }
 
// logger();
// logger();
// logger();
 
 
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
 
// console.log(fruitProcessor(2, 5));
 
 
// const juice1 = fruitProcessors(5, 0);
// const juice2 = fruitProcessors(2, 4);
// const juice3 = fruitProcessors(3, 2);
 
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };
 
// const age1 = calcAge(1991);
// console.log(age1);  
 
// function introduce(firstName, lastName, age) {
//     const introduction =  `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//   return introduction;
// }
 
// console.log(introduce("Dan Harold", "Pagarigan", 20));
// console.log(introduce("John"));
 
// function yearUntilRetirement (birthYear, firstName) {
//     const age = calcAge (birthYear);
//     const retirement = 65 - age;
 
//     if (retirement > 0 ) {
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         return `${firstName} has already retired`;
//     }
   
// }
 
// console.log(yearUntilRetirement(2000, "Dan"));
 
 
// /// function scoppe
// const globalVar = "I am global";
 
// function testScope()  {
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }
// testScope();
// console.log(globalVar);
 
// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return `No team wins... (${avgDolphins} vs. ${avgKoalas})`;
//   }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));


// const grades = [83, 92, 82, 99, 77];
// console.log(grades); [83, 92, 82, 99, 77];
 
// const friends = ["Dan", "Harvey", "Vince"];
// console.log(friends); ["Dan", "Harvey", "Vince"];
 
// const mixed = ["Dan", "40", false, "friends"];
// console.log(mixed); ["Dan", "40", false, "friends"];
 
 
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[5]);
 
 
// console.log(friends.length);
 
// friends[0] = "Diether";
// console.log(friends);
 
 
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }
 
// const ages = [calcAge(2000), calcAge(1940), calcAge(1991)];
// console.log(ages);
 
// const newLength = friends.push("Diether");
// console.log(friends);
// console.log(newLength);
 
// friends.unshift("Mark");
// console.log(friends);
 
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
 
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);
 
// console.log(friends.indexOf("Diether"));
// console.log(friends.indexOf("Mark"));
 
// console.log(friends.includes("Diether"));
// console.log(friends.includes("Mark"));
 
// // For loop
 
// for (let i = 0; i < friends.length; i++) {
//     const element = friends[i];
//     console.log(friends[i]);
// }
 
// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });
 
// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });
 
 
// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;
 
// for (let i = 0; i < grades2.length; i++) {
//     total += grades[i];
// }
 
// const average1 = total / grades2.length;
// console.log(`Average grade: ${average1.toFixed(2)}`);    
 
// let passedCount = 0;
// grades.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
 
// console.log(`${passedCount} out of ${grades.length} students passed`);


// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const studentGrades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   return sum / grades.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//   let highest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i];
//     }
//   }
//   return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//       count++;
//     }
//   }
//   return count;
// }

// // Generate complete report
// const average = calculateAverage(studentGrades);
// const highest = findHighestGrade(studentGrades);
// const lowest = findLowestGrade(studentGrades);
// const passing = countPassing(studentGrades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${studentGrades.length}`);


const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 208,
  isRead: true
};

const playlist = {
  name: "Chill Vibes",
  creator: "MusicLover123",
  songs: ["Song 1", "Song 2", "Song 3"],
  genre: "Lo-fi"
};


console.log(book.title);
console.log(book["author"]);
console.log(playlist.name); 
console.log(playlist["creator"]); 


book.publisher = "HarperOne";
playlist.duration = "45 minutes";


book.isRead = false;
playlist.genre = "Ambient";

console.log(book);
console.log(playlist);

const calculator = {
  num1: 10,
  num2: 5,
  operator: "+",

  add: function() {
    return this.num1 + this.num2;
  },

  subtract: function() {
    return this.num1 - this.num2;
  },

  multiply: function() {
    return this.num1 * this.num2;
  },

  divide: function() {
    if (this.num2 === 0) {
      return "Error: Division by zero";
    }
    return this.num1 / this.num2;
  },

  calculate: function() {
    switch (this.operator) {
      case "+":
        return this.add();
      case "-":
        return this.subtract();
      case "*":
        return this.multiply();
      case "/":
        return this.divide();
      default:
        return "Error: Invalid operator";
    }
  },

  getResult: function() {
    const result = this.calculate();
    return `${this.num1} ${this.operator} ${this.num2} = ${result}`;
  }
};

console.log(calculator.getResult());

calculator.operator = "*";
console.log(calculator.getResult());

calculator.operator = "-";
console.log(calculator.getResult());

calculator.operator = "/";
console.log(calculator.getResult());


// Coding Challenge #3 - User Profile System

const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

 
  calcAge: function() {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - this.birthYear;
    return this.age;
  },


  addFriend: function(name, status = "active") {
    this.friends.push({ name, status });
    return this.friends.length;
  },


  getActiveFriends: function() {
    return this.friends.filter(friend => friend.status === "active").length;
  },


  toggleStatus: function() {
    this.isActive = !this.isActive;
    return this.isActive;
  },


  getSummary: function() {
    this.calcAge(); 
    const activeFriends = this.getActiveFriends();
    const totalFriends = this.friends.length;
    const statusText = this.isActive ? "active" : "inactive";
    
    return `${this.firstName} ${this.lastName} is a ${this.age}-year-old from ${this.location}.
Status: ${statusText}
Friends: ${activeFriends} active out of ${totalFriends} total friends
Interests: ${this.interests.join(", ")}`;
  }
};


console.log(user.getSummary());
console.log("\nAdding a new friend...");
user.addFriend("Alex", "active");
console.log("Toggling status...");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());