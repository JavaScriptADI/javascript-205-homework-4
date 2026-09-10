const names = ["Anna", "James", "Nick", "Nino", "Giorgi", "Luka"];

while (names.length > 0) {
    let removedName = names.pop();
    console.log(`Removing ${removedName}`);
}

console.log(names);