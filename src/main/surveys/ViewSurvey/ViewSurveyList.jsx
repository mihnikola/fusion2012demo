import React, { useEffect, useState } from "react";
import styles from "./../CreateSurvey.module.css";
import ViewSurveyItem from "./ViewSurveyItem";
import PropTypes from "prop-types";

function ViewSurveyList({ data, criteria }) {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(
      data.filter((item) =>
        item.name.toLowerCase().includes(criteria.toLowerCase())
      )
    );
  }, [criteria]);

  return (
    <div className={styles.boxforUsers}>
      {criteria &&
        filterData.map((item) => <ViewSurveyItem key={item.id} data={item} />)}
      {!criteria &&
        data.map((item) => <ViewSurveyItem key={item.id} data={item} />)}
    </div>
  );
}

ViewSurveyList.propTypes = {
  data: PropTypes.array,
  criteria: PropTypes.string,
};

export default ViewSurveyList;
