"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: [],
  registerNewAnswer() {
    const answer = prompt(`${this.question}
    \n${this.options.join("\n")} 
    \n(Write option number)`);
    console.log(answer);
    // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
  },
};
console.log(poll.registerNewAnswer());

// const pollBtn = document.getElementsByClassName("poll");
// pollBtn(addEventListener, "click"){
//     prompt ("Hoi")
// };
