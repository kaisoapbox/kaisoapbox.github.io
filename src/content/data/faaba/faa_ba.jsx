import { useState, useRef, useEffect } from "react";

import questions from "./faa_ba.json";

const highlights = [
  {
    type: "text",
    text: "These are real questions taken from the Federal Aviation Administration's Biographical Assessment. Introduced in 2014, this assessment decided whether aspiring Air Traffic Controllers would get the job.",
  },
  {
    type: "question",
    question: 48,
    text: "Many seemingly-relevant questions are actually worth 0 points, and are 'informational only'. Less than half of the questions actually counted at all.",
  },
  {
    type: "text",
    text: "This assessment was implemented in large part due to a push for diversity among ATCs by the National Black Coalition of Federal Aviation Employees (NBCFAE).",
  },
  {
    type: "question",
    question: 34,
    text: "Some questions seemed sensible, if not straightforward to game.",
  },
  {
    type: "text",
    text: "Out of a possible 179 points, you needed 114 to pass. That couldn't have been that hard, right?",
  },
  {
    type: "question",
    question: 32,
    text: "Well, many questions had some unusually specific point allocations.",
  },
  {
    type: "text",
    text: "After this questionnaire was released, Shelton Snow, FAA employee and then-president of the NBCFAE's Washington Suburban chapter sent voicemails to NBCFAE applicants, advising them on the correct answers.",
  },
  {
    type: "question",
    question: 14,
    text: "It was later revealed that if you would be able to pass if you answered A on all but one question.",
  },
  {
    type: "text",
    text: "This test caught many ATC hopefuls by surprise, as the FAA implemented it suddenly and without warning, upending their existing ATC recruitment pipeline.",
  },
  {
    type: "question",
    question: 15,
    text: "There was an ~85% failure rate.",
  },
  {
    type: "text",
    text: "After years of advocacy, Congress finally heard about the scandal, and in June 2015, demanded the FAA respond to the cheating allegations.",
  },
  {
    type: "question",
    question: 16,
    text: "The subsequent FAA investigation cleared the NBCFAE and Snow of any wrongdoing.",
  },
  {
    type: "text",
    text: "A class-action lawsuit, Brigida v. US DoT, alleging job discrimination on the FAA's part, has been filed before the District Court of DC since 2016. That's 8 whole years!",
  },
  {
    type: "question",
    question: 6,
    text: "Congress passed an act overturning the use of this Biographical Assessment in 2016.",
  },
  {
    type: "text",
    text: "In the present day, there is a critical shortage of ATCs, with the FAA having 1,000 fewer ATCs in 2023 than it did in 2012. But again, who's counting?",
  },
  {
    type: "question",
    question: 18,
    text: "A Nov 2023 report by the National Airspace System (NAS) Safety Review Team found the FAA has been struggling with hiring since 'before the mid-2000s'. Unfortunately, ATC hiring is not a new problem, spanning many presidential administrations, both Democratic and Republican.",
  },
  {
    type: "text",
    text: "So regardless of the outcome of the class-action lawsuit, there will still be too few ATCs at the FAA for the foreseeable future. This means more flight delays and, unfortunately, more tragic crashes.",
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

function Question(props) {
  const [showWeight, setShowWeight] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="question-parent" key={props.index}>
      <h3 index={props.index + 1}>{props.question["question"]}</h3>
      <div className="options-container">
        {props.question["options"].map((option, index) => (
          <div className="option-container" key={index}>
            <button
              onClick={() => {
                if (props.show) {
                  setShowWeight(true);
                }
                setSelected(index);
                props.handleClick(option);
              }}
              disabled={showWeight}
              className={index === selected ? "selected" : ""}
            >
              <p option={String.fromCharCode(65 + index)}>
                {option["description"]}
              </p>
            </button>
            <p className={`points${showWeight ? " show" : ""}`}>
              {option["weight"] === 0 ? 0 : `+${option["weight"]}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Menu(props) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Menu</h2>
      <p>
        Find out whether you have what it takes to become an FAA Air Traffic
        Controller!
      </p>
      <p>
        If you don't know what this is about, I suggest starting with just the
        selected questions to get a feel for what to expect.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <button
          onClick={() => {
            props.setSelected("Highlights");
          }}
          style={{ marginBottom: "1.5em", textAlign: "center" }}
        >
          Selected Questions + Commentary
        </button>
        <button
          style={{ textAlign: "center" }}
          onClick={() => {
            props.setSelected("Quiz");
          }}
        >
          Whole Assessment (62 questions)
        </button>
      </div>
    </>
  );
}

function Highlights(props) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  function handleContinue() {
    setShow(
      index + 1 === highlights.length
        ? true
        : highlights[index + 1]["type"] === "text"
    );
    setIndex(index + 1);
  }

  function handleQuestionClick() {
    setShow(true);
  }

  if (index === highlights.length) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          alignItems: "center",
        }}
      >
        <p style={{ marginBottom: "0px" }}>
          Now why not take the entire questionnaire?
        </p>
        <button
          className="center"
          onClick={() => {
            props.setSelected("Quiz");
          }}
        >
          Whole Assessment (62 questions)
        </button>
        <button
          className="center"
          onClick={() => {
            props.setSelected("Menu");
          }}
        >
          Return to Menu
        </button>
      </div>
    );
  }
  return (
    <>
      {highlights[index]["type"] === "question" && (
        <Question
          index={highlights[index]["question"]}
          question={questions[highlights[index]["question"]]}
          handleClick={handleQuestionClick}
          show={true}
        />
      )}
      {show && (
        <div className="card">
          <p>{highlights[index]["text"]}</p>
        </div>
      )}
      {show && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={{ marginBottom: "0.5em" }} onClick={handleContinue}>
            Continue
          </button>
        </div>
      )}
    </>
  );
}

function Quiz(props) {
  const [answered, setAnswered] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current && myRef.current.scrollIntoView(true);
  }, [showResults]);

  function handleClick(option) {
    setScore(score + option["weight"]);
    setAnswered(answered + 1);
  }

  if (showResults) {
    const pass = score >= 114;

    return (
      <div ref={myRef} id="results-container">
        <h4>APPLICATION STATUS FOR ANNOUNCEMENT FAA-KAI-24-TRACEWG-69420</h4>
        <p className="score">Score: {score}/179</p>
        <wired-icon-button class={pass ? "center pass" : "center fail"}>
          <span className="material-icons">{pass ? "done" : "close"}</span>
        </wired-icon-button>
        <p>
          Thank you for submitting your application for announcement
          FAA-KAI-24-TRACEWG-69420. Based upon your responses to the
          Biographical Assessment, we have determined that you
          {pass ? " ARE" : " are NOT"} eligible for this position as a part of
          the current vacancy announcement.
        </p>
        <p>
          The biographical assessment measures ATCS job applicant
          characteristics that have been "shown empirically" to "predict
          success" as an air traffic controller in the FAA. These
          characteristics include factors such as prior general and ATC-specific
          work experience, education and training, work habits, academic and
          other achievements, and life experiences among other factors. This
          biographical assessment was "independently validated" by "outside
          experts".
        </p>
        <p>
          Many candidates applied for this totally legitimate position and
          unfortunately we have fewer job openings (0) than there were
          candidates. We encourage you to apply to future vacancy announcements.
          Thank you again for your interest in the Federal Aviation
          Administration.
        </p>
        <p>
          If you would like further information, please make your request in
          writing to kai[at]kaisoapbox.com with the title 'FAA Biographical
          Assessment'.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="center"
            style={{ marginBottom: "1em" }}
            onClick={() => {
              window.open(
                "https://twitter.com/intent/tweet?text=" +
                  encodeURIComponent(
                    `I ${
                      pass ? "PASSED" : "FAILED"
                    } the 2014 FAA Biographical Assessment with a score of ${score}. Do you have what it takes to become an ATC${
                      pass ? " like" : ", unlike"
                    } me?\n`
                  ) +
                  "&url=https://kaisoapbox.com/projects/faa_biographical_assessment"
              );
            }}
          >
            Share your score on Twitter (X)
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => {
              props.setSelected("Menu");
            }}
            style={{ marginBottom: "2em" }}
            className="center"
          >
            Return to Menu
          </button>
        </div>
      </div>
    );
  }
  return (
    <div ref={myRef} className="quiz">
      <div className="fade"></div>
      <h2 className="center">FAA Biographical Assessment</h2>
      <p className="score">Score: {score}/179</p>
      {questions.map((question, index) => (
        <Question
          key={index}
          index={index}
          question={question}
          handleClick={handleClick}
          show={true}
        />
      ))}

      <button
        disabled={answered < 62}
        className="results"
        onClick={setShowResults}
      >
        Show Results
      </button>
    </div>
  );
}

export default function Switcher() {
  const componentsMap = { Menu, Highlights, Quiz };
  const [selected, setSelected] = useState("Menu");
  const DynamicComponent = componentsMap[selected];
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView(true);
  }, [selected]);

  return (
    <div ref={scrollRef} id="top">
      <div
        id="watermark"
        className={selected === "Quiz" ? "watermarkFloat" : "watermark"}
      >
        Made with ❤️ by{" "}
        <a target="_blank" href="https://x.com/kaisoapbox">
          @kaisoapbox
        </a>
      </div>
      <DynamicComponent setSelected={setSelected} />
    </div>
  );
}
