import { Button } from "../Button/Button";
import cls from "./QuestionCard.module.css";

const QuestionCard = () => {
  return (
      <div className={cls.card}>
          <div className={cls.cardLabels}>
              <div>Level: 1</div>
              <div>Not complited</div>
          </div>

          <h5 className={cls.cardTitle}>What is JSX?</h5>

          <div className={cls.cardAnswers}>
              <label>Short answer:</label>
              <p className={cls.cardAnswer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem!</p>
          </div>

          <Button onClick={() => {}}>View</Button>
          
    </div>
  )
}

export default QuestionCard;