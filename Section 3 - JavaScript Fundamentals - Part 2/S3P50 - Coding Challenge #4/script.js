const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills);

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(calcTip(bills[i]) + bills[i]);
}

console.log(tips);
console.log(total);