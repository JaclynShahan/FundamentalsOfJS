//Odin Project Fundamentals part 1
// TROUBLESHOOTING!

// this exercise should log 2, but there's something wrong.  Fix the code!
const a = 1
const b = 1

console.log(a + b)

//OP Fundamentals pt 2
// this code asks you for a number.. and if that number is 6 will log 'true', otherwise it logs 'false'

// Edit the code so that it logs true if the number is greater than or equal to 10, and logs false if it is smaller.
const number = prompt("enter a number")

if (number >= 10) {
  console.log('true')
} else {
  console.log('false')
}

//OP Fundamentals pt 3
// Let's do some math.
// (let's make the computer do some math for us)

// for each of the variables in the code supply the requested formula

// a = one plus eight!
// b = 22 times three!
// c = the remainder of 5 / 4
// d = the variable a minus 17
// e = the sum of the previous 4 variables
const a = 1 + 8
const b = 22 * 3
const c = 5 % 4
const d = a - 17
const e = a + b + c + d

console.log({a, b, c, d, e})

//OP Fundamentals pt 4
// Take a look at this code and try to predict what it's going to do before running it...

// After making your guess, press 'run' and take a look at the output below.  If you were surprised by anything, go back and look at the code to see what's going on.

// Once you have a good handle on this code snippet delete the code, copy/paste the following comments into the code editor and then try to recreate the snippet on your own, using the comments as a guide.

// // 4 variables: first name, last name, current year, and birth year.
// // a 5th variable (greeting) that is constructed from the previous 4, it should contain a greeting with the person's full name and their age.
// // print the greeting with console.log

// Once you have your version of the code working let's go back over it and edit it to make it easier to read.  After each step, make sure to run the code to make sure the code still works!*

// Add 2 more variables: fullName and age
// Edit the greeting string to use fullName and age instead of doing the calculations in the string itself. (the greeting should look something like this: "Hello, my name is " + fullName)
// do NOT simply type the full name and age into the new variables, but set them using the calculations that were originally being done in the greeting.

// *note - in order to make the tests pass you will need to use these exact values for the years and names.  The wording needs to be exact.  If the tests fail, check spacing and punctuation:
// birthYear = 1948
// thisYear = 1965
// firstName = Carlos
// lastName = Stevenson

const birthYear = 1989
const thisYear = 2020
const firstName = "Jaclyn"
const lastName = "Shahan"
const fullName = firstName + " " + lastName
const age = thisYear - birthYear

const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old."
console.log(greeting)

// OP Fundamentals pt 5
// In a browser the simplest way to get user input is by using the prompt() function. (we'll cover better ways to do that in a later lesson) prompt() is used like this (run the code to see how it works):

// let number = prompt('what is your favorite number?')

// console.log(number)

// Your goal is to write a script that can figure out a student's score on a test by following these instructions:

// Add a variable for the number of points possible on the test (use 50)
// prompt the user for the number of points the student missed on the test and store it in a variable.
// Calculate the student's percentage score and print it using console.log. (try to figure out the math yourself!)
// to test yourself run the script, enter the following info and see if you get the right answer:

// Points missed: 13, Score: 74%
// Points missed: 25, Score: 50% (ouch 😬)
let number = prompt('what is your favorite number?')

console.log(number)

let maxPoints = 50
let pointsMissed = prompt('How many questions did you miss?')
console.log(pointsMissed)
let score = (maxPoints - pointsMissed) * 2
console.log("You scored: " + score + "%!")

// OP Fundamentals pt 6
// A Snarky Robot

// Write code that asks the user what their favorite number is and then responds according to the following guidelines:

// 1. If the number is 42, the response should be "Yay! That's my favorite too!"
// 2. If the number is less than 42 the response should be: "Eh, that's OK but X would be even better"  for this response `X` should be the number that they guessed + 1
// 3. If the number is higher than 42 the response should be: "LAME. That number is too large!"
let number = prompt('what is your favorite number')
let x = number + 1

if (number === 42) {
console.log("Yay! That\'s my favorite too!")
} else if (number < 42) {
    console.log("Eh, that\'s OK but " + x + " would be even better!")
} else if (number > 42) {
    console.log("LAME. That number is too large")
} else {
    console.log("Error")
}

//console.log(response)