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
*/

// Assignment operators
/*let x = 10 +5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++ ; // x = x + 1
x--;
x--;
console.log(x);
*/

// Comparison operators
/*console.log(ageJonas > ageSarah);// >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

// operator precedence
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/

// Coding challeng #1
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

// Strings and template Literals
/*
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
/* const  age = 15;

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
*/

// Coding challeng #2
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn})is higher than Mark's (${BMIMark})!`);
}


// Type Conversion 

 const inputYear = '1991';
 console.log(Number(inputYear));
 console.log(inputYear+18);

 console.log(Number('Jonas'));
 console.log(typeof NaN);

 console.log(String(23), 23);

 // Type Coercion

 console.log('I am '+ 23 +' years old');
 console.log('23' - '10' - 3);
 console.log('23' / '2');

// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You shold get a job');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

// Equality Operators: == VS ===

const age = '18';
if ( age === 18) { // boa pratica usar sempre ===
    console.log('You just became an adult :) (strict)')
}

if ( age == 18) {
    console.log('You just became an adult :) (loose)')
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23){
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7){
    console.log('7 is also cool number!')
} else if (favourite === 9){
    console.log('9 is also cool number!')
} else {
    console.log('Number is not 23 or 7 or 9')
}

*/

// Boolean logic & logical operators

const hasDriversLicence = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

//if (hasDriversLicence && hasGoodVision) {
//    console.log('Sarah is able to drive!');
//} else {
//    console.log('Someone else shold drive...');
//}

const isTired = true; //C
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else shold drive...');
}

// Coding Challenge

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas); 

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
}else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
}else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log('Both win the trophy');
}else {
    console.log('No one wins the trophy');
}


// The switch statement

const day = 'tuesday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'tursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('not a valid day');
}

// another option 

if (day === 'monday') {
    console.log('monday')
} else if (day === 'tuesday') {
    console.log('tuesday')
} else if (day === 'wednesday' || day === 'tursday') {
    
}else if (day === 'friday') {
    console.log('friday')
}else if (day === 'saturday') {
    console.log('saturday')
}else if (day === 'sunday') {
    console.log('sunday')
}else {
    console.log('not a valid day');
}

// Statements and expressions
  // aula teorica

// The conditional (ternary) operator

const age = 23;
//age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18){
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// coding challenge

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, ande the total value ${bill + tip}`);

// JavaScript Releases
  // aula teórica 

