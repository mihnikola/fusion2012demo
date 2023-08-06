import React from "react";
import Sidebar from "../../navbar/Sidebar";
import CreateMessage from "../messages/CreateMessage";
import LayoutBox from "../boxes/LayoutBox";


export default function AddPost() {
  return (
    <Sidebar>
      <LayoutBox>
        <CreateMessage />
      </LayoutBox>
    </Sidebar>
  );
}
