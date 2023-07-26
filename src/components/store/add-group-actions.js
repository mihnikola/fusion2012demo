import { useNavigate } from "react-router-dom";
import { socket } from "../../App";
import { groupActions } from "./add-group-slice";
import {
  collection,
  query,
  onSnapshot
} from "firebase/firestore";
import {firestore} from './../../firebase';
export const fetchGroupData = () => {
  return async (dispatch) => {

    const q = query(collection(firestore, "users"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      // setTodos(todosArray);
      dispatch(groupActions.getUsers(todosArray));
    });
    return () => unsub();


  //   try {
  //     const data = [
  //       {
  //         data_id: "wqeqweqweqweqeqweqweq",
  //         name: "Pera",
  //         last_name: "Peric",
  //         email: "pera.peric@gmail.com",
  //         active: 1,
  //       },
  //       {
  //         data_id: "dasdadasdad",
  //         name: "Mika",
  //         last_name: "Mikic",
  //         email: "mika.mikic@gmail.com",
  //         active: 1,
  //       },
  //       {
  //         data_id: "xcvxcvxcvxcvxvxcvxcvxv",
  //         name: "Zika",
  //         last_name: "Zikic",
  //         email: "zika.zikic@gmail.com",
  //         active: 1,
  //       },
  //     ];
  //     dispatch(groupActions.getUsers(data));
  //   } catch (error) {}
  };
};

export const addGroupData = (groupData) => {
  return async (dispatch) => {
    socket?.emit("cr_new", groupData, function (dataFromServer) {
      try {
        if (dataFromServer === "ok") {
          console.log(dataFromServer);

          // const navigate = useNavigate();
          // navigate('/login');
        }
      } catch (error) {
        throw error;
      }
    });
  };
};
