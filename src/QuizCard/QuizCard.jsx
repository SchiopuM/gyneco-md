import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./QuizCard.module.css";

const QuizCard = ({ subject }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [score, setScore] = useState(0);
  const [eplication, seteplication] = useState(0);
  const state = useSelector((state) => state);
  const subj = state[subject];

  const {
    app,
    scoreSection,
    questionSection,
    questionCount,
    questionText,
    answerSection,
    correct,
    incorrect,
  } = style;

  const handleAnswerOptionClick = (isCorrect, index) => {
    if (isCorrect) {
      setScore(score + 1);
      setIsWrong(false);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < subj.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    } else {
      setIsWrong(true);
      seteplication(index);
    }
  };
  return (
    <div className={app}>
      {showScore ? (
        <div className={scoreSection}>
          You scored {score} out of {subj.length}
        </div>
      ) : (
        <>
          <div className={questionSection}>
            <div className={questionCount}>
              <span>Question {currentQuestion + 1}</span>/{subj.length}
            </div>
            <div className={questionText}>
              {subj[currentQuestion].question}

              {isWrong ? (
                <p>{subj[currentQuestion].answers[eplication].explication}</p>
              ) : null}
            </div>
          </div>
          <div className={answerSection}>
            {subj[currentQuestion].answers.map((answerOption, index) => (
              <button
                className={
                  isWrong ? (answerOption.isTrue ? correct : incorrect) : null
                }
                onClick={() =>
                  handleAnswerOptionClick(answerOption.isTrue, index)
                }
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizCard;
