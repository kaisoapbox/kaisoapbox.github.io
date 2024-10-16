import React from "react";

import questions from "./faa_ba.json";

const highlights = [
  {
    type: "text",
    text: "These are real questions taken from the Federal Aviation Administration's Biographical Assessment.",
  },
  {
    type: "question",
    question: 34,
    text: "Some questions seem sensible, if not straightforward to game.",
  },
  {
    type: "text",
    text: "Introduced by the FAA in 2014, this assessment decided whether aspiring Air Traffic Controllers would get hired.",
  },
  {
    type: "question",
    question: 16,
    text: "Other questions are tricker to get right.",
  },
  {
    type: "text",
    text: "Out of a possible 179 points, you needed 114 to pass.",
  },
  {
    type: "question",
    question: 14,
    text: "If you simply answered A on everything, you'd get 113, just 1 point shy of a pass.",
  },
  { type: "text", text: "Sounds easy enough, right?" },
  {
    type: "question",
    question: 15,
    text: "There was a ~90% failure rate.",
  },
  {
    type: "text",
    text: "This assessment was implemented in large part due to a push for diversity among ATCs by the National Black Coalition of Federal Aviation Employees (NBCFAE).",
  },
  {
    type: "question",
    question: 48,
    text: "Many seemingly-relevant questions are actually worth 0 points, and are 'informational only'.",
  },
  {
    type: "text",
    text: "In fact, of the 62 questions, only 28 count for points. Less than half, but who's counting?",
  },
  {
    type: "question",
    question: 28,
    text: "Of the questions that do count, the point allocations can often be oddly specific.",
  },
  {
    type: "text",
    text: "After this questionnaire was released, Shelton Snow, FAA employee and then-president of the NBCFAE's Washington Suburban chapter sent voicemails to NBCFAE applicants, advising them on the correct answers.",
  },
  {
    type: "question",
    question: 32,
    text: "A subsequent internal FAA investigation cleared the NBCFAE and Snow of wrongdoing.",
  },
  {
    type: "text",
    text: "A class-action lawsuit, Brigida v. US DoT, alleging job discrimination on the FAA's part, has been filed before the District Court of DC since 2016. That's 8 years, but who's counting?",
  },
  {
    type: "question",
    question: 6,
    text: "The FAA has discontinued use of this Behavioural Assessment since 2018.",
  },
  {
    type: "text",
    text: "In the present day, there is a critical shortage of ATCs, with the FAA having 1,000 fewer ATCs in 2023 than it did in 2012. But again, who's counting?",
  },
  {
    type: "question",
    question: 18,
    text: "A Nov 2023 report by the National Airspace System (NAS) Safety Review Team found the FAA has been struggling with hiring since 'before the mid-2000s'.",
  },
  {
    type: "text",
    text: "So regardless of the outcome of the class-action lawsuit, there will still be too few ATCs at the FAA for the foreseeable future. I hope you like flight delays.",
  },
];

function randomCompliment() {
  const compliments = [
    "Are you an NBCFAE member?",
    "Lucky guess.",
    "You're practically tailor-made for the FAA.",
    "I guess you're ATC material then.",
    "Maybe you were an ATC in a past life.",
    "If you don't think about it too hard, this basically makes you Kennedy Steve.",
    "Did Shelton Snow give you the answers?",
  ];
  const random = Math.floor(Math.random() * compliments.length);
  return compliments[random];
}

function randomAdmonishment() {
  const admonishments = [
    "You should've known.",
    "Are you just guessing?",
    "You'll get it next time.",
    "I'm not sure you're cut out for this.",
    "That's got to sting.",
    "Ouch.",
    "Try thinking harder before answering the next one.",
    "Are you sure you're trying?",
    "I don't think you're ATC material.",
    "Guess you're not what the FAA is looking for.",
    "Have you tried lying?",
    "Next time, try selecting the correct answer.",
    "I recommend choosing the correct answer next time.",
    "That one was a doozy!",
    "Maybe keep the day job.",
  ];
  const random = Math.floor(Math.random() * admonishments.length);
  return admonishments[random];
}

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWeight: false };
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        `${this.props.index + 1}. ${this.props.question["question"]}`
      ),
      this.props.question["options"].map((option, index, allOptions) =>
        React.createElement(
          "div",
          { id: "options-container" },
          React.createElement(
            "wired-button",
            {
              onClick: () => {
                if (this.props.show) {
                  this.setState(() => ({
                    showWeight: true,
                  }));
                }
                this.props.handleClick(option, allOptions);
              },
            },
            `${String.fromCharCode(65 + index)}. ${option["description"]}`
          ),
          this.state.showWeight &&
            React.createElement(
              "p",
              { id: "points" },
              option["weight"] === 0 ? 0 : `+${option["weight"]}`
            )
        )
      )
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h3", null, "Menu"),
      React.createElement(
        "p",
        null,
        "Find out whether you have what it takes to become an FAA Air Traffic Controller!"
      ),
      React.createElement(
        "p",
        null,
        "If you don't know what this is about, I suggest starting with just the selected questions to get a feel for what to expect."
      ),
      React.createElement(
        "wired-button",
        {
          onClick: () => {
            this.props.setSelected("Highlights");
          },
        },
        "Selected Questions + Commentary"
      ),
      React.createElement(
        "wired-button",
        {
          onClick: () => {
            this.props.setSelected("Quiz");
          },
        },
        "Whole Assessment (62 questions)"
      )
    );
  }
}

class Highlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, show: true };

    this.handleContinue = this.handleContinue.bind(this);
    this.handleQuestionClick = this.handleQuestionClick.bind(this);
  }

  handleContinue() {
    this.setState((prevState) => ({
      index: prevState.index + 1,
      show:
        prevState.index + 1 === highlights.length
          ? true
          : highlights[prevState.index + 1]["type"] === "text",
    }));
  }

  handleQuestionClick(option, allOptions) {
    this.setState((prevState) => ({ show: true }));
  }

  render() {
    if (this.state.index === highlights.length) {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Now why not take the entire questionnaire?"
        ),
        React.createElement(
          "wired-button",
          {
            onClick: () => {
              this.props.setSelected("Quiz");
            },
          },
          "Whole assessment (62 questions)"
        ),
        React.createElement(
          "wired-button",
          {
            onClick: () => {
              this.props.setSelected("Menu");
            },
          },
          "Return to Menu"
        )
      );
    }
    return React.createElement(
      "div",
      null,
      highlights[this.state.index]["type"] === "question"
        ? React.createElement(Question, {
            index: highlights[this.state.index]["question"],
            question: questions[highlights[this.state.index]["question"]],
            handleClick: this.handleQuestionClick,
            show: true,
          })
        : null,
      this.state.show &&
        React.createElement("p", null, highlights[this.state.index]["text"]),
      this.state.show &&
        React.createElement(
          "wired-button",
          {
            onClick: this.handleContinue,
          },
          "continue"
        )
    );
  }
}

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      score: 0,
      maxScore: 0,
      statusText:
        "Do you have what it takes to become an ATC? You need 114 points to pass.",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(option, allOptions) {
    let nextStatus = "That question was worth no points and didn't matter.";
    let bestWeight = 0;
    allOptions.forEach((_option, _index) => {
      if (_option["weight"] > bestWeight) {
        bestWeight = _option["weight"];
        nextStatus =
          bestWeight === option["weight"]
            ? `You picked the best option, worth ${
                _option["weight"]
              } points! ${randomCompliment()}`
            : `The best option was '${String.fromCharCode(65 + _index)}. ${
                _option["description"]
              }', worth ${_option["weight"]} points. ${randomAdmonishment()}`;
      }
    });
    this.setState((prevState) => ({
      score: prevState.score + option["weight"],
      maxScore: prevState.maxScore + bestWeight,
      index: prevState.index + 1,
      statusText: nextStatus,
    }));
  }

  render() {
    if (this.state.index === questions.length) {
      const pass = this.state.score >= 114;
      return React.createElement(
        "div",
        { id: "results-container" },
        React.createElement(
          "h4",
          null,
          "APPLICATION STATUS FOR ANNOUNCEMENT FAA-KAI-24-TRACEWG-69420"
        ),
        React.createElement(
          "p",
          { id: "center" },
          `Score: ${this.state.score}/${this.state.maxScore}`
        ),
        React.createElement(
          "wired-icon-button",
          { id: "center", class: pass ? "pass" : "fail" },
          React.createElement(
            "span",
            { class: "material-icons" },
            pass ? "done" : "close"
          )
        ),
        React.createElement(
          "p",
          null,
          `Thank you for submitting your application for announcement FAA-KAI-24-TRACEWG-69420. Based upon your responses to the Biographical Assessment, we have determined that you ${
            pass ? "ARE" : "are NOT"
          } eligible for this position as a part of the current vacancy announcement.`
        ),
        React.createElement(
          "p",
          null,
          'The biographical assessment measures ATCS job applicant characteristics that have been "shown empirically" to "predict success" as an air traffic controller in the FAA. These characteristics include factors such as prior general and ATC-specific work experience, education and training, work habits, academic and other achievements, and life experiences among other factors. This biographical assessment was "independently validated" by "outside experts".'
        ),
        React.createElement(
          "p",
          null,
          "Many candidates applied for this totally legitimate position and unfortunately we have fewer job openings (0) than there were candidates. We encourage you to apply to future vacancy announcements. Thank you again for your interest in the Federal Aviation Administration."
        ),
        React.createElement(
          "p",
          null,
          "If you would like further information, please make your request in writing to kaisoapbox [at] gmail.com with the title 'FAA Biographical Assessment'."
        ),
        React.createElement(
          "wired-button",
          {
            id: "center",
            onClick: () => {
              window.open(
                "https://twitter.com/intent/tweet?text=" +
                  encodeURIComponent(
                    `I ${
                      pass ? "PASSED" : "FAILED"
                    } the 2014 FAA Biographical Assessment with a score of ${
                      this.state.score
                    }. Do you have what it takes to become an ATC${
                      pass ? " like" : ", unlike"
                    } me?\n`
                  ) +
                  "&url=https://kaisoapbox.com/projects/faa_biographical_assessment"
              );
            },
          },
          "Share your score on Twitter (X)"
        ),
        React.createElement(
          "wired-button",
          {
            onClick: () => {
              this.props.setSelected("Menu");
            },
            id: "center",
          },
          "Return to Menu"
        )
      );
    }
    return React.createElement(
      "div",
      { id: "container" },
      React.createElement("p", null, this.state.statusText),
      React.createElement(
        "p",
        null,
        `Score: ${this.state.score}/${this.state.maxScore}`
      ),
      React.createElement(Question, {
        index: this.state.index,
        question: questions[this.state.index],
        handleClick: this.handleClick,
        show: false,
      })
    );
  }
}

export default function Switcher() {
  const componentsMap = { Menu, Highlights, Quiz };
  const [selected, setSelected] = React.useState("Menu");
  const DynamicComponent = componentsMap[selected];
  return <DynamicComponent setSelected={setSelected} />;
}
