import React, { useState } from "react";
import styles from "./../CreateSurvey.module.css";
import SelectOption from "../SelectOption";

function Answers({addAnwser, removeAnswer, answerChange, answers, answerTypeChange}) {
  
      const [reset, setReset] = useState(false);

  return (
    <div>
      {answers &&
        answers.map((answer, index) => (
          <div className={styles.responses} key={index}>
            <SelectOption
              type={answer.type ? answer.type : 0}
              reset={reset}
              key={index}
              name={index}
              onChangeType={answerTypeChange}
            />
            <input
              type="text"
              // id={answer.answer_id}
              name="answer"
              placeholder="Add answer..."
              className={styles["input-box-input"]}
              value={answer.text}
              autoComplete="off"
              onChange={(e) => answerChange(e, index)}
            />

            <button type="button" className={styles.plus} onClick={(e)=>addAnwser(e,index)}>
              +
            </button>
            <button
              type="button"
              className={styles.minus}
              onClick={() => removeAnswer(index)}
            >
              -
            </button>
          </div>
        ))}
    </div>
  );
}

export default Answers;
