const randomNumbers = [];
let find = 13;
let count = 0;
for (let i = 0; i < 20; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
  if (randomNumbers[i] === find) {
    count++;
  }
}
console.log(randomNumbers);
console.log(`The number ${find} appears ${count} times.`);