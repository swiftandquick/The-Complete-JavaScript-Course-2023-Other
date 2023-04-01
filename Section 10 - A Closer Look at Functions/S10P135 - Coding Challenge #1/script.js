'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0)
};

poll.registerNewAnswer = function() {
    const option = Number(prompt(`${this.question}\n${this.options[0]}, \n${this.options[1]}, \n${this.options[2]}, \n${this.options[3]}, `));
    console.log(option);
    if (option !== NaN && option >= 0 && option <= 3) {
        this.answers[option] = this.answers[option] + 1;
    }
    this.displayResults('array');
    this.displayResults('string');
}

poll.displayResults = function(type = 'array') {
    if (type === 'array') {
        console.log(this.answers);
    }
    else {
        console.log(`Poll results are ${this.answers.join(', ')}`);
    }
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]}, 'string');
poll.displayResults.call({answers: [5, 2, 3, 9, 6, 1]}, 'string');
poll.displayResults.call({answers: [5, 2, 3]}, 'array');
poll.displayResults.call({answers: [5, 2, 3, 9, 6, 1]}, 'array');
poll.displayResults.call({answers: [5, 2, 3]});
poll.displayResults.call({answers: [5, 2, 3, 9, 6, 1]});