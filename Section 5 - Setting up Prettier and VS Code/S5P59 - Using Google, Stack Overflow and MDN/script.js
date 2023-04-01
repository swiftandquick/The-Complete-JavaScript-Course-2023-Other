function amplitude(temperatures) {

    let min = temperatures[0];
    let max = temperatures[0];

    for (let i = 1; i < temperatures.length; i++) {
        let current = Number(temperatures[i]);
        if (current != NaN) {
            if (current < min) {
                min = current;
            }
            if (current > max) {
                max = current;
            }
        }
        else {
            continue;
        }
    }
    return max - min;
}

console.log(amplitude([3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]));
console.log(amplitude([3, 5, 1].concat([9, 0, 5])));