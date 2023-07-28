
import { useState } from "react";
import Sidebar from "../../navbar/Sidebar.js";
import LayoutBox from "../boxes/LayoutBox";
import EditGroupForm from "./EditGroupForm.js";
import GroupForm from "./GroupForm";
import { useSelector } from "react-redux";

const Group = () => {
  const [editUsers, setEditUsers] = useState("");
  const [check, setCheck] = useState(false);
  const groups = useSelector((state) => state.groups.groups);



  return (
    <Sidebar>
      <LayoutBox>
        {!check && <GroupForm  groups={groups}  />}
        {check  && <EditGroupForm  usersEdit={editUsers} />}
      </LayoutBox>
    </Sidebar>
  );
};
export default Group;
