/*
Falsy:
false
emty string is falsy
[] emty array truthy
{} emty object truthy
anything else that is not falsy will be truthy


Truthy:
truth
any number (positive or negative)
any string including single white space is truthy, '0', 'false'
undefined is falsy
null is falsy
*/

let x;
console.log(x);
// const x = 0;
if (x) {
    console.log("variable is truthy");
} else {
    console.log("Variable is falsy");
}