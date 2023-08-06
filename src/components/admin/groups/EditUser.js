import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../store/user-slice';
import Input from '../../UI/Input';
import Header from '../boxes/Header';
import FusionLogo from './../../../img/green-power.png'
import styles from './EditUser.module.css'
import { usersActions } from '../../store/users-slice';
function EditUser() {

  const id = useSelector(state => state.user.id);
  const name = useSelector(state => state.user.name);
  const lastName = useSelector(state => state.user.lastName);
  const active = useSelector(state => state.user.active);
  const email = useSelector(state => state.user.email);
  const error = useSelector(state => state.user.error);
  const dispatch = useDispatch();
  const dispatchUsers = useDispatch();


  const handleChangeName = (e) => {
    dispatch(userActions.editName(e.target.value));
  }
  const handleChangeLastName = (e) => {
    dispatch(userActions.editLastName(e.target.value));
  }
  const handleChangeEmail = (e) => {
    dispatch(userActions.editEmail(e.target.value));
  }
  const changeStatusHandler = (e) => {
    dispatch(userActions.editStatus(!active));
  }
  const resetHandler = (e) => {
    e.preventDefault();
    dispatch(userActions.editReset({}));
  };
  const changeUserHandler = (e) => {
    e.preventDefault();
    const formData = {
      id, name, lastName, email, active
    }
    dispatchUsers(usersActions.editUser(formData));
    dispatch(userActions.editReset({}));
  };

  return (
    
    <form action="#" method="post">
      {error && <p>Greska nema podataka</p>}
      {!error && <>
      <Header
        style={styles.titleofForm}
        title="Edit form"
        imageStyle={styles.log}
        image={FusionLogo}
      />
      <Input
        type="text"
        autoComplete="off"
        style={styles["input-box"]}
        id={id}
        value={name}
        onChange={handleChangeName}
        placeholder="Edit name"
      />
      <input
        type="text"
        autoComplete="off"
        className={styles["input-box"]}
        id={id}
        value={lastName}
        onChange={handleChangeLastName}
        placeholder="Edit surname"
      />
      <input
        type="text"
        autoComplete="off"
        className={styles["input-box"]}
        id={id}
        value={email}
        onChange={handleChangeEmail}
        placeholder="Edit email"

      />
      <span className={styles.status}>Status user</span>
      <input
        type="checkbox"
        autoComplete="off"
        className={styles["check-box"]}
        id={id}
        checked={active}
        onChange={changeStatusHandler}
      />
      <div className={styles.newBtn}>
        <button
          className={styles.btnAdmin}
          onClick={changeUserHandler}
        >
          Save changes
        </button>
        <button
          className={styles.btnAdminRemove}
          onClick={resetHandler}
        >
          Cancel
        </button>
      </div>
      </>
      }
    </form>

  )
}

export default EditUser