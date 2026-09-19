const randomNumbers3 = [];
let minValue = 999;

for (let i = 0; i < 15; i++) {
    randomNumbers3.push(Math.floor(Math.random() * 1000));
    if (minValue > randomNumbers3[i]) {
        minValue = randomNumbers3[i];
    }
}
console.log(randomNumbers3);
console.log(`The smallest number is: ${minValue}`);