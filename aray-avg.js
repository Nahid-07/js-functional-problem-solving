/* Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values. */

function make_average(numbers){
    let sum =0;
    for(i=0;i<numbers.length;i++){
        sum += numbers[i]    
    }
    let average = sum / i;
    return average;
}
let array = [5,10,15,20,25,30];
let sum = make_average(array);
console.log(sum);