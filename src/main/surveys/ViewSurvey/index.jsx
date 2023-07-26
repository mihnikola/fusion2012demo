import React, { useRef, useState } from "react";
import styles from "./../CreateSurvey.module.css";
import ViewSurveyList from "./ViewSurveyList";

function ViewSurveys({ surveys }) {
  // const filterRef = useRef();
  const [filterValue, filterRef] = useState("");
  const [show, setShow] = useState(false);
  const clearHandlerGroup = () => {
    setShow(false);
    // filterRef.current.value = "";
    // filterRef.current.focus();
    filterRef("");
  };

  const handleInputChange = (e) => {
    // const filterValue = filterRef.current.value;
    filterRef(e.target.value);
    if (filterValue !== "") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className={styles.boxPreview}>
      <input
        type="text"
        // ref={filterRef}
        value={filterValue}
        className={styles.searchPoll}
        onChange={handleInputChange}
        placeholder="Search survey..."
      />

      <button
        className={`${
          show === true ? styles.clearinput : styles.clearinputhide
        }`}
        type="button"
        onClick={clearHandlerGroup}
      ></button>
      {/* <ViewSurveyList
        data={surveys.filter((item) =>
          item.name
            .toLowerCase()
            .includes(filterRef.current.value.toLowerCase())
        )} */}
      <ViewSurveyList data={surveys} criteria={filterValue} />
    </div>
  );
}

export default ViewSurveys;
