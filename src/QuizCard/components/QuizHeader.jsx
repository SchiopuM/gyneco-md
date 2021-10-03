import React from "react";
import { useUser } from "reactfire";
import quizz from "../../assets/quizz.png";

const QuizHeader = () => {
  const { data: user } = useUser();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "100px 0px",
      }}
    >
      <div style={{ width: "45%" }}>
        <p
          style={{
            color: "#007344",
            fontSize: "53px",
            fontFamily: "bold",
          }}
        >
          Bună,
          <p style={{ color: "#FBC343", fontSize: "50px", fontFamily: "bold" }}>
            {user?.displayName}
          </p>
          Ești gata pentru quiz-ul de azi?
        </p>
      </div>
      <img src={quizz} alt="img" style={{ height: "320px" }} />
    </div>
  );
};

export default QuizHeader;
