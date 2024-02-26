//Coding Step 1
//Array of Numbers

//3, 9, 23, 64, 2, 8, 28, 93

let ages = [3, 9, 23, 64, 2, 8, 28, 93];


// Coding Step 1 A

//For loop to subtract the first array element '3' from the last element '90'
for (let i = 0; i <= ages[0]; i++) {
    console.log(ages[0] - ages[ages.length - 1]);
}


// Coding Step 1 B

//Adding a new age '75' to the array by adding a new element
ages.push(75);


// Coding Step 1 C

//Rerunning the for loop to subtract the first element '3' 
//from the new last element '75'
for (let i = 0; i <= ages[0]; i++) {
    console.log(ages[0] - ages[ages.length - 1]);
}

//Dividing the total sum of all numbers by the total number of elements
let total = 0;
for(let i = 0; i < ages.length; i++) {
  total += ages[i];
}
const average = total / ages.length;
console.log (total / ages.length)
//total 305 / 9 = average 33.88


// Coding Step 2

//Array of Names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];


// Coding Step 2 A

// Assigning value to the names based on number of letters
names[0] = 3;
names[1] = 5;
names[2] = 3;
names[3] = 5;
names[4] = 4;
names[5] = 3;
//sum 23 / 6 names = 3.83

// Calculating the average number of leters per name
let sum = 0;
for(let i = 0; i < names.length; i++) {
  sum += names[i];
}
console.log (sum / names.length)

// Coding Step 2 B

//loop to concatenate all names together
for(let i = 0; i < names.length; i++) {
  console.log (names.join(' '))
}

//Coding step 3

//How do you access the last element of any array?
console.log (names[names.length - 1]);

//Coding step 4

//How do you access the first element of an array?
console.log (names = names[0]);

//Coding step 5

//New array "nameLengths"
let nameLengths = [];

//Looping previous 'names' array 

for (var i = 0; i <= names; i++) {
}

//Adding length of each name to new array 'nameLengths'
nameLengths.push(3, 5, 3, 5, 4, 3);
console.log(nameLengths);


//Coding step 6

//Loop over 'nameLengths' array calculating the sum of all
//the array elements (number of letters for each name)
let allOfThem = 0
for (let i = 0; i < nameLengths.length; i++){
  allOfThem += nameLengths[i];
}
console.log(allOfThem);


//Coding step 7

//Function with 2 parameters, 'word' and 'n' as arguments and 
//returns the 'word' concatenated to itself 'n' number of times
function stepSeven (para1, para2) {
  console.log(para1 + ' ' + para1);
}

//Calling the function
stepSeven('word', 'n');


//Coding step 8

//Function with 2 parameters 'firstName' and 'lastName'
let stepEight = {
  firstName:"Spencer",
  lastName: "Corbett",
  fullName: function () {

   //Return full name 'firstName' space 'lastName'
    return this.firstName + " " + this.lastName;
  }
}

//Calling the function
console.log(stepEight.fullName());  


//Coding step 9

//Write a function that takes an array of numbers and returns 
//true if the sum of all the numbers in the array is greater than 100.

//Array of numbers
let numbersArray = [5, 10, 15, 20, 25, 30];

//Finding sum (grandTotal) of all numbers in the array
let grandTotal = 0
for (let i = 0; i < numbersArray.length; i++) {
  grandTotal += numbersArray[i];
} //GrandTotal = 105

//Function to return "True" if sum (grandTotal) > 100
function stepNine(grandTotal) {
  if ( grandTotal > 100) {
    console.log('True');
  } else {
    console.log('False');
  }
}

//Calling the function
stepNine(grandTotal);


//Coding step 10

//Write a function that takes an array of numbers and returns 
//the average of all the elements in the array


//New numbers array
let numbersArray2 = [35, 40, 45, 50, 55, 60];

//Finding the sum (all) of all array elements
let all = 0
for (let i = 0; i < numbersArray2.length; i++) {
  all += numbersArray2[i];
} //all = 285

//all = 285 / 6 (total number of elements)
let answer = all / numbersArray2.length
function stepTen(numbersArray2) {
  return answer;
} //Average (answer) = 47.5

//Calling the function
console.log(stepTen());


//Coding step 11

//Write a function that takes two arrays of numbers 
//and returns true if the average of the elements in the first array 
//is greater than the average of the elements in the second array

//Finding average (resolution) of first array (numbersArray)
let resolution = grandTotal / numbersArray.length
function stepEleven(numbersArray) {
  return resolution;
} //grandTotal(105) / (6)number of elements = 17.5(resolution)

let greaterAverage = Math.max(answer, resolution);
//greaterAverage = the > of the two, 47.5 (answer)

//Function with both arrays 
function stepEleven(numbersArray, numbersArray2) {
  if (greaterAverage > 17.5) {
    console.log('True');
  } else {
    console.log('False');
  }
  return greaterAverage;
} //If answer {47.5} (avergage of array 1) is greater than 
//resolution {17.5} (average of array 2), the function will return "True"

//Calling the function
stepEleven(greaterAverage);


//Coding step 12

//Write a function called willBuyDrink that takes a boolean isHotOutside,
//and a number moneyInPocket, and returns true if it is hot outside 
//and if moneyInPocket is greater than 10.50

let isHotOutside = true
//Is it hot?: yes
let moneyInPocket = 12
//12 > 10.50 

function willBuyDrink (isHotOutside, moneyInPocket){
  if (isHotOutside = true) {
  } else {(isHotOutside = true && moneyInPocket > 10.50) 
    console.log('True')
  }
} //If 'isHotOutside is true and 'moneyInPocket' > 10.50
//willBuyDrink = true

//Calling the function
willBuyDrink()


//Coding step 13

//Create a function of your own that solves a problem. 

//The function "stepThirteen" reminds me that I am 
//old enough to vote but not to retire, sadly

let votingAge = 18
let retirementAge = 65
let Spencer = 28

function stepThirteen(Spencer){
  if (Spencer > votingAge){
    console.log('I can vote!');
    //If I am older than votingAge (18), I can vote

  } else if (Spencer > votingAge && Spencer > retirementAge)
    console.log('I can vote and retire!');
    //If I am older than retirementAge (65), I can retire

  } (Spencer > votingAge + Spencer < retirementAge)
    console.log('I can vote, but I cannot retire');
//If I am older than votingAge (18) but younger than reitrementAge (65),
//I can vote but I cannot retire

//Calling the functions
    stepThirteen()