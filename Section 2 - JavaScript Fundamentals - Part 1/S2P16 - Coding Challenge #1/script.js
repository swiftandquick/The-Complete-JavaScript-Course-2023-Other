// Coding Challenge 1

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

const markHigherBmi = markBmi > johnBmi;
const markHigherBmi2 = markBmi2 > johnBmi2;

console.log(markBmi, johnBmi, markHigherBmi);
console.log(markBmi2, johnBmi2, markHigherBmi2);