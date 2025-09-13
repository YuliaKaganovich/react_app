import { useEffect, useState } from "react";
import { API_URL } from "../../constants"
import { QuestionCardList } from "../../components/QuestionCardList";
// import cls from "/HomePage.module.css"

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      const responce = await fetch(`${API_URL}/react`);
      const questions = await responce.json();

      setQuestions(questions);

      console.log("questions", questions);
    } catch (error) { 
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <QuestionCardList cards={questions} />
    </>
  );
};
