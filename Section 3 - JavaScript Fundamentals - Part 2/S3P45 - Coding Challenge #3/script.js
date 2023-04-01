const mark = {
    height: 1.69,
    weight: 78,
    calcBmi: function () {
        return this.weight / (this.height * this.height);
    }
}

const john = {
    height: 1.95,
    weight: 92,
    calcBmi: function () {
        return this.weight / (this.height * this.height);
    }
}

const markBmi = mark.calcBmi();
const johnBmi = john.calcBmi();

if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi}).`);
}
else if (johnBmi > markBmi) {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's BMI (${markBmi}).`);
}
else {
    console.log(`Both BMI are equal (${markBmi}).`);
}