import { socket } from "../../App";
import { fetchGroupData } from "./add-group-actions";
import { userActions } from "./edit-user-slice";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "./../../firebase";

export const updateUsersData = (userForm) => {
  return async (dispatch) => {
    updateDoc(doc(firestore, "users", userForm.id), {
      email: userForm.email,
      active: userForm.active,
      name: userForm.name,
      lastName: userForm.lastName,

    });
    dispatch(userActions.editReset({}));
    dispatch(fetchGroupData());
  };
};
