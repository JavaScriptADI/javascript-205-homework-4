const names = ["Anna", "James", "Nick", "John", "Mary", "Peter", "Tom"];

for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}.`);
}

const reversedNames = ["Anna", "James", "Nick", "John", "Mary", "Peter", "Tom"];

for (let i = reversedNames.length - 1; i >= 0; i--) {
    console.log(`Hello ${reversedNames[i]}.`);
}