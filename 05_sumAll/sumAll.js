const sumAll = function(...args) {
    let sum = 0;
    let min = Math.min(...args);
    let max = Math.max(...args);
    let span = max - min + 1;
    for (let i = 0; i < span; i++) {
        sum += min + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
