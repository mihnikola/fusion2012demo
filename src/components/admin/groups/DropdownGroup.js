import React, { useRef, useState } from 'react'
import styles from '../groups/DropdownGroup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { groupsActions } from '../../store/groups-slice';
function DropdownGroup({group}) {
   
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");
    const inputRef = useRef(null);
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    const selectOption = (option) => {
        if (option.lastName != null) {
            inputRef.current.value = option.name + " " + option.lastName;
        } else {
            inputRef.current.value = option.name;
        }
        setIsOpen((isOpen) => !isOpen);
    };

    function toggle(e) {
        setIsOpen(e && e.target === inputRef.current);
    }


    const inputChangeNameUserHandler = (e) => {
        if (e.target.value.length > 2) {
            setValue(e.target.value);
        } else {
            setValue("");
        }
    };

    const addHandler = (e) => {
        e.preventDefault();
        const groupUser = users.find((user) => user.name + " " + user.lastName === inputRef.current.value);
        dispatch(groupsActions.addUser({ group, user: groupUser }))
        inputRef.current.value = '';
    };
    return (
        <div className={styles.responses}>
            <div className={styles.dropdown}>
                <div className={styles.control}>
                    <div className={styles["selected-value"]}>

                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Add user"
                            onChange={(e) => { inputChangeNameUserHandler(e) }}
                            onClick={toggle}
                        />
                    </div>
                    <div className={`${styles.arrow} ${isOpen ? styles.open : ""}`}></div>
                </div>

                <div className={`${styles.options} ${isOpen ? styles.open : ""}`}>
                    {users.filter((user) => user.name.includes(value) || user.lastName.includes(value)).map((option, index) => {
                        return (
                            <div
                                onClick={() => selectOption(option)}
                                className={`${styles.option} ${option["name"] === value ? styles.selected : ""}`}
                                key={`${"id"}-${index}`}
                            >
                                {option["lastName"] ? option["name"] + " " + option["lastName"] : option["name"]}
                            </div>
                        );
                    })}
                </div>
            </div>
            <button type="button" className={styles.plus} onClick={addHandler}>+</button>
        </div>
    )
}

export default DropdownGroup;