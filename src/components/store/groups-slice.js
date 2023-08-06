import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  groups: [],
  group: [],
  editMode: false,
};
const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    setGroups(state, action) {
      state.groups = [...state.groups, action.payload];
    },
    setRemoveGroup(state, action) {
      state.groups = state.groups.filter((group) => group.id != action.payload);
    },
    setEditMode(state, action) {
      state.editMode = action.payload.edit;
      if (action.payload.id) {
        state.group = state.groups.find(
          (group) => group.id == action.payload.id
        );
      }
    },
    updateGroupName(state, action) {
      let { group, groupName } = action.payload;
      const changeGroupName = {
        id: group.id,
        name: groupName,
        users: group.users,
      };
      state.group = changeGroupName;
    },
    removeUser(state, action) {
      let { id, group } = action.payload;
      const filteredGroupUsers = {
        id: group.id,
        name: group.name,
        users: group.users.filter((user) => user.id != id),
      };
      state.group = filteredGroupUsers;
    },
    addUser(state, action) {
      let { user, group } = action.payload;
      let users = [...group.users];

      const checkUser = users.filter((u) => u.id == user.id);
      if (checkUser.length === 0) {
        let users = [...group.users, user];
        const addUserGroup = { id: group.id, name: group.name, users };
        state.group = addUserGroup;
      }
    },
    setUpdateGroup(state, action) {
      let { group } = action.payload;
      let obj_ind = state.groups.findIndex((g) => g.id == group.id);
      let groups = [...state.groups];
      groups[obj_ind].users = group.users;
      groups[obj_ind].name = group.name;
    },
  },
});

export const groupsActions = groupsSlice.actions;

export default groupsSlice;
