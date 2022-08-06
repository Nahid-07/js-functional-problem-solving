/* 2) Write a function called make_avg() which will take an three integers and return the
average of those values. */

function make_average(assignment1,assignment2,assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const avg = total /3;
    return avg;
}
let marks_1= 59;
let marks_2 = 60;
let marks_3 = 60;
let average = make_average(marks_1 , marks_2 , marks_3);
console.log(parseFloat(average.toFixed(2)));
