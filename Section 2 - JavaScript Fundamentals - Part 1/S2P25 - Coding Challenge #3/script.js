// Coding Challenge 3

const Dolphins = (97 + 112 + 101) / 3;
const Koalas = (109 + 95 + 106) / 3;

if (Dolphins > Koalas && Dolphins >= 100) {
    console.log("Dolphins win!");
}
else if (Koalas > Dolphins && Koalas >= 100) {
    console.log("Koalas win!");
}
else if (Dolphins === Koalas && Dolphins >= 100) {
    console.log("Draw!");
}
else {
    console.log("No one wins.");
}