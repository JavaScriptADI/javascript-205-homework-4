const randomNumbers3 = [];
let maxValue = 0;

for (let i = 0; i < 15; i++) {
    randomNumbers3.push(Math.floor(Math.random() * 1000));
    if (maxValue < randomNumbers3[i]) {
        maxValue = randomNumbers3[i];
    }
}
console.log(randomNumbers3);
console.log(`The biggest number is: ${maxValue}`);