import React from 'react'
import { FaUser, FaUsers } from 'react-icons/fa';
import Input from '../UI/Input';
import styles from './UserItem.module.css'
import editImg from './../../img/edit.png'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../store/user-slice';
import { groupActions } from '../store/group-slice';
function UserItem(props) {
  const { user } = props;
  const users = useSelector((state)=>state.group.users);
  const dispatch = useDispatch();


  const editUserHandler = (e) =>{
    e.preventDefault();
    dispatch(userActions.getUser({user}));
  }
  const checkUsers = (e) => {
    if(e.target.checked){
      dispatch(groupActions.addUserOnGroup(user));
    }else{
      dispatch(groupActions.removeUserFromGroup(user));
    }
  } 

  return (
    <>
      <div className={styles.bordertwo} key={user.id}>
        <div key={user.id} className={styles.forget}>
          <label className={styles["checkbox-label"]} key={user.id}>
            {user.active === 1 &&
              <input
                type="checkbox"
                id={user.id}
                name={user.name}
                data-email={user.email}
                data-active={user.active}
                key={user.id}
                value={user.name}
                onChange={(e) => checkUsers(e)}
                checked={users.some(pUser => pUser.id === user.id)}
              />
            }
            {user.active === 1 ? <div className={styles["checkbox-custom"]}></div> : null}
            {user.active === 1 &&
              <div className={styles.usersinAdminForm}>{user.name + " " + user.lastName}</div>}
            {user.active === 0 &&
              <div className={styles.usersDisabled}>{user.name + " " + user.lastName}</div>}

          </label>
        </div>
        <div className={styles.btns}>
          <button
            id={user.id}
            className={styles.updateBtn}
            onClick={editUserHandler}
          >
            <img src={editImg} 
              className={styles.editicon}
              id={user.id} 
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default UserItem;