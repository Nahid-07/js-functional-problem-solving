// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

function numToSquare(square){
    let result = square*square;
    return result;
}
let numberToBeSquare = 100;
const squares = numToSquare(numberToBeSquare);
console.log(squares);