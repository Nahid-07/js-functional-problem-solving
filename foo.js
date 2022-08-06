// 1) Write a function called foo() which prints “foo” and a function called bar() which prints
// “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
// the foo() to see the output.

function foo(){
    let output = "foo";
    console.log(output);
    console.log(x);
    // return output;
}
function bar(){
    let output2 = "bar";
    return output2;
}
let x = bar();
foo();
// let y = foo();
// console.log(y);