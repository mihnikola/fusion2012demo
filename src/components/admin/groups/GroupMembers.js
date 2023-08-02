import React, { useState } from 'react'
import Button from '../../UI/Button';
import styles from '../groups/GroupMembers.module.css';
import { useDispatch } from 'react-redux';
import { groupsActions } from '../../store/groups-slice';
function GroupMembers({users, group}) {
    const dispatch = useDispatch();

    const removeHandler = (e) => {
        e.preventDefault();
        dispatch(groupsActions.removeUser({id: e.target.id, group}))
    };
    return (
        <>
            {users.map((user, index) => (
                <div className={styles.responses} key={index}>
                    <input type="text" id={user.id} className={styles["input-box-input"]} value={user.lastName  ? user.name +" "+user.lastName : user.name} autoComplete="off" disabled />
                    <button className={styles.minus} id={user.id} onClick={(e) => removeHandler(e, index)}>-</button>
                </div>
            ))}
        </>
    )
}

export default GroupMembers