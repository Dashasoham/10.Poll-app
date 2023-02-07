"use strict";
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["1: JavaScript", "2: Python", "3: Rust", "4: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answerUser = Number(
      prompt(`${this.question}
    \n${this.options.join("\n")} 
    \n(Write option number)`)
    );

    console.log(answerUser);

    typeof answerUser === "number" &&
      answerUser <= this.answers.length &&
      this.answers[answerUser - 1]++;

    this.displayResults();
    this.displayResults("string");

    // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
  },
  displayResults(type = "array") {
    if (type === "array") {
      //WHY does it log in this option?
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

const pollBtn = document.querySelector(".poll");
pollBtn.addEventListener("click", poll.registerNewAnswer.bind(poll));

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

//Why? Does it create a new object?
poll.displayResults.call({ answers: data1 }, "string");

// poll.displayResults = function (type) {
//   if (typeof poll.answers === "[]") {
//     console.log(poll.answers);
//   } else {
//     ("Hi");
//   }
// };
*/
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
