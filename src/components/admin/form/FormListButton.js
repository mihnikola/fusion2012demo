import React, { useEffect, useRef, useState } from 'react'
import styles from '../form/FormListButton.module.css'
import editImg from "../../../img/edit.png";
import trashImg from "../../../img/trash2.png";
import ModalOverlay from '../../UI/ModalOverlay';
import BackdropGroup from '../groups/BackdropGroup';
import { useDispatch } from 'react-redux';
import { groupActions } from '../../store/group-slice';
export default function FormListButton(props) {
  const { groups, query, socket } = props;

  const [group, setGroup] = useState("");
  const [groupId, setGroupId] = useState("");
  const [check, setCheck] = useState(false);
  const [arrayUsers, setArrayUsers] = useState([{ data_id: "", name: "", status: "" }]);
  const [modalForm, setModalForm] = useState(false);
  console.log("FormListButton", groups)
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(group);
    if (check) {
      props.onEditGroup(arrayUsers, group, check);
    }
  }, [check]);

  const removeGroupHandler = (e) => {
    e.preventDefault();
    let id = e.target.id;

    if (id != null) {
      setModalForm(true);
      setGroupId(id);
      // <ModalOverlay check="true" title="Da li ste sigurni da li želite da sačuvate anketu?" />
    }

  };

  const editGroupHandler = (e) => {
    e.preventDefault();
    const group = groups.find((group) => group.id == e.target.id);
    dispatch(groupActions.setGroupEdit(group));
  };
  const modalFormHandler = () => {
    setModalForm(false);
  }
  const approvedFormHandler = (approve) => {
    // setModalForm(false);
    // if(approve){
    // socket?.emit("remove_group_user", { id: groupId }, function (dataFromServer) {
    //       console.log(dataFromServer);
    //       if (dataFromServer === "ok") {
    //         props.refresh();
    //       }
    //     });
    // }
    
  }
  // const groups = [
  //   {
  //     id: 1,
  //     name: "studenti",
  //     users: [
  //       { id: 12, name: 'zdravko colic' },
  //       { id: 13, name: 'marko colic' },
  //       { id: 14, name: 'janko colic' },
  //     ]
  //   }, {
  //     id: 2,
  //     name: "radnici",
  //     users: [
  //       { id: 15, name: 'milica mikic' },
  //       { id: 16, name: 'lazar bikic' },
  //       { id: 17, name: 'filip cicic' },
  //     ]
  //   }
  // ]

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
