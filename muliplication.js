/* একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।  */
function number(num){
    for(i=1;i<=10;i++){
        let result = num * i;
        console.log(num + " X " + i + " = " + result);
    }
}
number(13);
console.log("======================")
number(15);