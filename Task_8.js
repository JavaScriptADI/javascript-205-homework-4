const numbers2 = [5, 10, 5, 20, 5, 30];
find = 5;

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === find) {
        console.log(`Found ${find} at index ${i}`);
    }
};