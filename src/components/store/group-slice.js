import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    id: "",
    name: "",
    users: []

};
const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {
        editGroupName(state, action) {
            state.name = action.payload;
        },
       
        setResetGroupName(state, action){
            state.name = "";
        },
        getUsers(state, action) {
            state.users = action.payload;
        },

        addUserOnGroup(state, action) {
            state.users = [...state.users, action.payload];
        },
        removeUserFromGroup(state, action) {
            const item = action.payload;
            state.users = state.users.filter((obj) => obj.id != item.id);
        },
        setUserId(state, action) {
            state.id = action.payload;
        },
        setGroups(state, action) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.users = action.payload.users;
        }
    }
})

export const groupActions = groupSlice.actions;

export default groupSlice;
