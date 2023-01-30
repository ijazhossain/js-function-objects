/* 
Write a function called odd_even() which takes an integer value and tell whether this values is even or odd. you need to do it in four ways:
1. Has return + Has parameter.
2. No return + Has parameter.
*/

// without return
/* function odd_even(number) {
    if (number % 2 === 0) {
        console.log('Number is even');
    } else {
        console.log('Number is odd');
    }
}
odd_even(11); */

// using return
function odd_even(number) {
    if (number % 2 === 0) {
        return ('Number is even');
    } else {
        return ('Number is odd');
    }
}

var result = odd_even(100);
console.log(result);