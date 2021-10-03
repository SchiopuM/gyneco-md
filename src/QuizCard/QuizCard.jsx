import React, { useState } from "react";
import { useSelector } from "react-redux";
import QuizHeader from "./components/QuizHeader";
import style from "./QuizCard.module.css";
import headImg from "../assets/Group.png";
import QuizWiner from "./components/QuizWiner";

const QuizCard = ({ subject }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [score, setScore] = useState(0);
  const [eplication, seteplication] = useState(0);
  const state = useSelector((state) => state);
  const subj = state[subject];

  const { btn, answerSection } = style;

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
    <div style={{ margin: "100px 0px" }}>
      <QuizHeader />
      {showScore ? (
        <div
          style={{
            backgroundColor: "#1F4F81",
            borderRadius: "50px",
            width: "75%",
            margin: "0px auto",
            padding: "70px 70px",
          }}
        >
          <QuizWiner />
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#1F4F81",
            borderRadius: "50px",
            width: "75%",
            margin: "0px auto",
            padding: "40px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img src={headImg} alt="img" height="230px" />
            <div style={{ width: "60%" }}>
              <p style={{ color: "#6FF6D5", fontSize: "30px" }}>
                {subj[currentQuestion].question}
              </p>
              {isWrong ? (
                <p style={{ fontSize: "20px", color: "white" }}>
                  {subj[currentQuestion].answers[eplication].explication}
                </p>
              ) : null}
            </div>
          </div>
          <div className={answerSection}>
            {subj[currentQuestion].answers.map((answerOption, index) => (
              <button
                className={btn}
                style={
                  isWrong
                    ? answerOption.isTrue
                      ? { borderColor: "#6FF6D5" }
                      : { borderColor: "#FFE063" }
                    : null
                }
                onClick={() =>
                  handleAnswerOptionClick(answerOption.isTrue, index)
                }
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizCard;
