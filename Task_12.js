const statistics = [];
maxValue = -1001;
minValue = 1001;
let N = 100;
let countN = 0;
let countPositive = 0;
let countNegative = 0;
let countEven = 0;
let countOdd = 0;
for (let i = 0; i < 20; i++) {
    statistics.push(Math.floor(Math.random() * 2001 - 1000));
    const integer = statistics[i];
    if (integer > maxValue) maxValue = integer;
    if (integer < minValue) minValue = integer;

    if (integer > 0) {
        countPositive++;
    } else if (integer < 0) {
        countNegative++;
    }

    if (integer % 2 === 0) {
        countEven++;
    } else {
        countOdd++;
    }

    if (integer === N) {
        countN++;
    }
}
console.log(statistics);
console.log(`100 appeared: ${countN} times`);
console.log(`Positive numbers: ${countPositive}`);
console.log(`Negative numbers: ${countNegative}`);
console.log(`Even numbers: ${countEven}`);
console.log(`Odd numbers: ${countOdd}`);
console.log(`Biggest number:  ${maxValue}`);
console.log(`Smallest number: ${minValue}`);