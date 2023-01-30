/* 
Write a function called make_avg() which will take an three integers and return the average of those values. 
*/
function make_avg(num1, num2, num3) {
    var averageOfThree = (num1 + num2 + num3) / 3;
    return averageOfThree;
}
var averageOfThree = make_avg(1, 2, 3);
console.log(averageOfThree);