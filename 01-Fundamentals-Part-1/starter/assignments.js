/*let country = "Brasil";
let continent = "America do Sul";
let population = "214,3 Milhões";

console.log("Brasil");
console.log("America do sul");
console.log("214,3 Milhões");

// Taking decisions: If / Else Statemants

const population = 130;

if (population >= 33 ) {
    console.log("Portugal's population is above overage");
} else {
    console.log("Portugal's population is 22 million below average");
}

*/

// Type conversion and coercion

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// Equality Operators: == vs. ===

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border');
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders')
}

// Logical Operators

