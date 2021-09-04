/* 
UNDEFIEND:
1. variable value not assigned
2. function but didn't write return anything
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array index
8. explicitly set value to undefiend


NULL:
Explicitly set value to null can only be 

Difference between null and undefined:
Null is explicityly set by own and undefiend can be showed above 9 ways of reasons
*/
let first;
// console.log(first);
function second(x, y) {
    // console.log(x + y);
}
// const fourth = add(2.7);
// console.log(fourth);

function double(a, b) {
    const result = 1 * 2;
    // console.log(b);
    return result;
}
double(81);

const fifth = { name: 'sogir', age: 15, location: 'bandorban' };
// console.log(fifth.phone);

const sixth = [54, 24, 234, 53];
// console.log(sixth[5]);

delete sixth[2];
// console.log(sixth);

const seventh = undefined;
// console.log(seventh)


const myObject = { name: 'samad', profession: null, age: 25 };
