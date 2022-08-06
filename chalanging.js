/* 
3) Challenging: Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values.
*/

function make_avg(array){
    let sum = 0;
    for(let i=0;i<array.length; i++){
        let element = array[i];
        sum = sum + element;
    }
    return sum;
}
let x = [15,25,23,85,66];
const z = make_avg(x);
console.log(z);

