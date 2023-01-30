/* একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।  */

function multiplicationTable(x) {
    var table = [];
    for (let i = 1; i <= 10; i++) {
        const tableItem = x * i;
        table.push(tableItem);
    }
    console.log(table);
}

multiplicationTable(11);