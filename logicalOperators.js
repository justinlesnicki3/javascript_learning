// console.log(true || false);
// console.log(false || true);
// console.log(true || true);
// console.log(false || false);

let hasReservations = true;
let allowsWalkIns = false;

const hasAccessToTable = hasReservations || acceptingWalkIns;

console.log(hasAccessToTable);


// && operator

console.log(true && false);
console.log(false && false);

// inverse using !

let example = true;

const flippedValue = !example;
console.log(flippedValue);

//null coalescing operator

let a = null;
const result = a ?? false;

console.log(result);


let b = null;

const endResult = (b !== null && b !== undefined) ? a : false;
console.log(endResult);
