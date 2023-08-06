import React, { useEffect, useRef, useState } from 'react'
import styles from '../form/FormListButton.module.css'
import editImg from "../../../img/edit.png";
import trashImg from "../../../img/trash2.png";
import ModalOverlay from '../../UI/ModalOverlay';
import BackdropGroup from '../groups/BackdropGroup';
import { useDispatch } from 'react-redux';
import { groupActions } from '../../store/group-slice';
import { groupsActions } from '../../store/groups-slice';
export default function FormListButton(props) {
  const { groups, query, socket } = props;

  const [group, setGroup] = useState("");
  const [groupId, setGroupId] = useState("");
  const [check, setCheck] = useState(false);
  const [arrayUsers, setArrayUsers] = useState([{ data_id: "", name: "", status: "" }]);
  const [modalForm, setModalForm] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(group);
    if (check) {
      props.onEditGroup(arrayUsers, group, check);
    }
  }, [check]);

  const removeGroupHandler = (e) => {
    e.preventDefault();
    dispatch(groupsActions.setRemoveGroup(e.target.id));
  };

  const editGroupHandler = (e) => {
    e.preventDefault();
    dispatch(groupsActions.setEditMode({edit: true, id:e.target.id}));

  };
  const modalFormHandler = () => {
    setModalForm(false);
  }
  const approvedFormHandler = (approve) => {

    
  }


  return (
    <>
      {modalForm &&
        <BackdropGroup
          onConfirm={modalFormHandler}
          onApprove={approvedFormHandler}
          check={true}
          title="Da li želite da obrišite grupu?"
        />
      }
      <div className={styles.boxforusers}>
        {groups
          .filter((group) => group.name.toLowerCase().includes(query.toLowerCase()))
          .map((group) => (
            <div className={styles.bordertwo} key={group.id}>
              <div className={styles.forget}>
                <label className={styles["checkbox-label"]}>
                  <div className={styles.UsersforList}>{group.name}</div>
                </label>
              </div>
              <div className={styles.btns}>
                <button
                  id={group.id}
                  className={styles.updateBtn}
                  onClick={editGroupHandler}
                >
                  <img src={editImg} className={styles.editicon} onClick={editGroupHandler} value={group.name} id={group.id} />
                </button>
                <button
                  id={group.id}
                  className={styles.removeBtn}
                  onClick={removeGroupHandler}
                >
                  <img src={trashImg} className={styles.editicon} onClick={removeGroupHandler} value={group.name} id={group.id} />
                </button>
              </div>
            </div>
          ))}
      </div>
    </>

  )
}
