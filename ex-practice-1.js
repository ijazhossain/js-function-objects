/* একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।  */

function multiplicationTable(x) {
    for (let i = 1; i <= 10; i++) {
        console.log(x * i);
    }
}

multiplicationTable(10);