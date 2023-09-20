import React, { useEffect, useState } from "react";
import QuizCard from "../components/Quiz/QuizCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Quiz() {
  const navigate = useNavigate();
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    const user_email = localStorage.getItem("user_email");
    if (!user_email) {
      navigate("/");
    } else {
      // Define an async function to fetch data
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://opentdb.com/api.php?amount=15"
          );
          setQuestionData(response.data.results);
          console.log(questionData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      // Call the fetchData function
      fetchData();
    }
  }, [navigate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#212529",
      }}
    >
      <QuizCard question={questionData[0]} counter = {0} />
    </div>
  );
}

export default Quiz;
