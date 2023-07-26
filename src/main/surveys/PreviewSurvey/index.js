import React, { useReducer } from "react";
import styles from "./PreviewSurvey.module.css";
import { useDispatch, useSelector } from "react-redux";
import trashImg from "../../../img/trash2.png";
import editImg from "../../../img/edit.png";
import { questionsActions } from "../../../redux/reducers/question";
import { surveyActions } from "../../../redux/reducers/survey";

function PreviewSurvey() {
  const dispatch = useDispatch();
  const dispatchSurvey = useDispatch();
  const questions = useSelector((state) => state.question.questions);

  const editQuestionHandler = (e) => {
    const question = questions.find((question) => question.id == e.target.id);
    dispatchSurvey(surveyActions.setQuestion(question));
  };
  
  const removeQuestionHandler = (e) => {
    dispatch(questionsActions.removeQuestion(e.target.id));
  };

  return (
    <div className={styles.QuestionnaireDiv}>
      {questions?.map((question) => (
        <div className={styles.boxOfQuestion} key={question.id}>
          <div className={styles.content}>
            <div className={styles.design}>
              <div className={styles.firstPart}>
                <div className={styles.Question}>{question.questionText}</div>
                {question.answers.map((answer, index) => (
                  <div className={styles.forget} key={index}>
                    <span className={styles.answerOfQuestion}>
                      {answer.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className={styles.btns2}>
                <div className={styles.btnAdminEdit}>
                  <img
                    src={editImg}
                    className={styles.editicon}
                    id={question.id}
                    onClick={(e) => editQuestionHandler(e)}
                  />
                </div>
                <div className={styles.btnAdminRemove}>
                  <img
                    src={trashImg}
                    className={styles.editicon}
                    onClick={(e) => removeQuestionHandler(e)}
                    id={question.id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PreviewSurvey;
