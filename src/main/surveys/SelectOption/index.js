import { useEffect, useRef } from "react";
import styles from "./SelectOption.module.css";

function SelectOption({ type = 0, name, onChangeType }) {
  const selectRef = useRef();
  useEffect(() => {
    selectRef.current.value = 0;
  }, [type]);

  useEffect(() => {
    if (type) selectRef.current.value = type;
  }, [type]);

  return (
    <div>
      <select
        name={`select-${name}`}
        ref={selectRef}
        className={styles.combobox}
        defaultValue={type}
        onChange={()=>onChangeType(selectRef.current.value, name)}
      >
        <option value={0}>
          Type of answer:
        </option>
        <option value={1}>Fix text</option>
        <option value={2}>Free text</option>
      </select>
    </div>
  );
}

export default SelectOption;
