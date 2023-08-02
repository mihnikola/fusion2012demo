
import { useState } from "react";
import Sidebar from "../../navbar/Sidebar.js";
import LayoutBox from "../boxes/LayoutBox";
import EditGroupForm from "./EditGroupForm.js";
import GroupForm from "./GroupForm";
import { useSelector } from "react-redux";

const Group = () => {
 
  const groups = useSelector((state) => state.groups.groups);
  const editMode = useSelector((state)=> state.groups.editMode);

  return (
    <Sidebar>
      <LayoutBox>
        {!editMode && <GroupForm groups={groups}  />}
        {editMode  && <EditGroupForm />}
      </LayoutBox>
    </Sidebar>
  );
};
export default Group;
