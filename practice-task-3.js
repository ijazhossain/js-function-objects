/* 
Write a function called make_avg() which take an array of integers and the size of that array and return the average of those values.
*/
function make_avg(arrayOfInt) {
    var sum = 0;
    for (var i = 0; i < arrayOfInt.length; i++) {
        sum = sum + arrayOfInt[i];
    }
    var averageOfArray = sum / arrayOfInt.length;
    return (averageOfArray);

}
var averageOfArray = make_avg([1, 2, 3, 4, 5, 9]);
console.log(averageOfArray);