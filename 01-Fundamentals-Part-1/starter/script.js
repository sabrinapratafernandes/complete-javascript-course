/* let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas"

let javascriptIsFun = true;
console.log (javascriptIsFun);

console.log (typeof true);
console.log (typeof javascriptIsFun);
console.log (typeof 23);
console.log (typeof "Jonas");

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990

var job = 'programmer';
job = 'teacher'

/*lastName = 'schmedtmann';
console.log(lasName); */

// Math operators
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas/10, 2**3)
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lasName = 'Schmedtmann';
console.log(firstName + ' ' + lasName);

// Assignment operators
let x = 10 +5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++ ; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);// >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// operator precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);

// Coding challeng #1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// Strings and template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew)

console.log(`String
multiple
lines`)

*/

// Taking Decisions: if / else statement

const  age = 15;

if (age >= 18) {
    console.log('Sarah can start driving licence');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)` );
}

const birthYear = 1991;

let century;

if (birthYear <= 2000 ) {
    century = 20;
} else {
    century = 21;
}

console.log(century)
