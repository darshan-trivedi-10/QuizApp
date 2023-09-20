import React, { useState } from "react";

let question = {
  category: "Entertainment: Music",
  type: "multiple",
  difficulty: "easy",
  question:
    "Who wrote the Sinead O`Connor hit &#039;Nothing Compares 2 U&#039;?",
  correct_answer: "Prince",
  incorrect_answers: ["Michael Jackson", "Cameo", "Rick James"],
};


function QuizCard({counter}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const answerOptions = [...question.incorrect_answers, question.correct_answer];

  const handleOptionClick = (index) => {
    const selectedAnswer = answerOptions[index];
    setSelectedOptions([index]);

    console.log(counter, index, selectedAnswer);
  };

  return (
    <div
      style={{
        width: "65%",
        height: "50%",
        borderRadius: "10px",
        color: "white",
        fontSize: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        ({counter}) {question.question}
      </div>
      <div style={{marginTop : '10px'}}>
        {answerOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(index)}
            style={{
              cursor: "pointer",
              border: selectedOptions.includes(index)
                ? "2px solid white"
                : "none",
            }}
          >
            {index + 1}) {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizCard;
