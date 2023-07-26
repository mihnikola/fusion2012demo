import React, { useEffect, useRef, useState } from "react";
import styles from "./../CreateSurvey.module.css";
import Answers from "../AnswersSurvey/Answers";

function Questions({getData, children, questionId,questionText, increment, decrement, textChange, maxNumberChange, maxAnswers}) {
  return (
      <div className={`${styles.yesNo} `}>
        <textarea
          type="text"
          rows={50}
          cols={96}
          value={questionText}
          id={questionId}
          onChange={(e)=>textChange(e)}
          className={styles["input-box-textarea"]}
          placeholder="Add question..."
        />
        <div className={styles.questions}>
          <label htmlFor="maxBroj">Add max number of answers:</label>
          <button onClick={(e)=>decrement(e,maxAnswers)} className={styles.minus}>
            -
          </button>

          <input
            type="text"
            onChange={(e)=>maxNumberChange(e)}
            value={maxAnswers}
            min="0"
            max="20"
            className={styles["input-box-maxAnswer"]}
          />

          <button onClick={(e) => increment(e,maxAnswers)} className={styles.plus}>
            +
          </button>
        </div>
          {children}

        <button type="submit" id="add" onClick={getData} className={styles.add}>
          Save question
        </button>
      </div>
  );
}

export default Questions;
