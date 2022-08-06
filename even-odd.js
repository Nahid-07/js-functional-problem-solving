/* 4) Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter */


// this is the  solution of has parameter + no return
// function even_odd(number){
//     if(number /2 && number % 2 === 0){
//         console.log("its an even Number");
//     }else{
//         console.log("number is odd");
//     }
// }
// even_odd(6);

// this is the solution of has return + has parameter
function odd_even(number1){
    let number = number1;
    if(number /2 && number % 2 === 0){
        console.log("its an even Number");
    }else{
        console.log("number is odd");
    }
}
// let parameter = 6;
// let avg = odd_even(parameter);
// console.log(avg)