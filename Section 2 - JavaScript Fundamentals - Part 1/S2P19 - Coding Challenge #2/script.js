// Coding Challenge 2

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 95;
const johnHeight = 1.88;

const markWeight2 = 92;
const markHeight2 = 1.95;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBmi = markWeight / (markHeight * markHeight);
const johnBmi = johnWeight / (johnHeight * johnHeight);

const markBmi2 = markWeight2 / (markHeight2 * markHeight2);
const johnBmi2 = johnWeight2 / (johnHeight2 * johnHeight2);

if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi}).`);
}
else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi}).`);
}

if (markBmi2 > johnBmi2) {
    console.log(`Mark's BMI (${markBmi2}) is higher than John's (${johnBmi2}).`);
}
else {
    console.log(`John's BMI (${johnBmi2}) is higher than Mark's (${markBmi2}).`);
}