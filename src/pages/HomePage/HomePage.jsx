import { useEffect, useState } from "react";
import { API_URL } from "../../constants"
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
// import cls from "/HomePage.module.css"

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const responce = await fetch(`${API_URL}/${url}`);
    const questions = await responce.json();

    setQuestions(questions);
    return questions;
  });

  useEffect(() => {
    getQuestions('react');
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList cards={questions} />
    </>
  );
};
