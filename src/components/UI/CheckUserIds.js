import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { groupActions } from '../store/group-slice';
import styles from "../UI/CheckUserIds.module.scss";

function CheckUserIds() {
  const users = useSelector((state) => state.group.users);
  const dispatch = useDispatch();
  const removeUser = (user) => {
    console.log("CheckUserIds removeUser", user)
    dispatch(groupActions.removeUserFromGroup(user));
  }
  return (
    <>
      {
        users.length > 0 &&
        <div className={styles.previewCheckUsers}>
          {users ? users.map(user => (
            <span className={styles.userTag} key={user.id}>
              <i>{user.name + " " + user.lastName + " "}</i>
              <span className={styles.userTagRemove} onClick={() => removeUser(user)}>&#x2715;</span>
            </span>
          )
          )
            :
            null}
        </div>
      }
    </>
  )
}

export default CheckUserIds