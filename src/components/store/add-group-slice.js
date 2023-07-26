import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    name: "",
    users: [],
    edit: false,
    userChecked: []
};
const groupSlice = createSlice({
    name:'group',
    initialState, 
    reducers:{
        addUser(state, action){
            const id = action.payload;
        },
        editGroupName(state, action){
            console.log("editGroupName", action)
            state.nameGroup = action.payload;
        },
        editUser(state, action){
            const {data_id, name, activate, email,last_name,check} = action.payload.user;
            state.id = data_id;
            state.name = name;
            state.status = activate;
            state.email = email;
            state.lastName = last_name;
            state.edit = check;
        },
        getUsers(state, action){
            state.users = action.payload;
        },
        disableEdit(state,action){
            state.edit = action.payload;
        },
        editName(state, action){
            state.name = action.payload;
        },
        editLastName(state, action){
            state.lastName = action.payload;
        },
        editEmail(state, action){
            state.email = action.payload;
        },
        editStatus(state, action){
            state.status = action.payload;
        },
        editResult(state, action){
            state.result = action.payload;
        },
        addUserOnGroup(state, action){
            const item = action.payload;
            state.userChecked.push(item);
        },
        removeUserFromGroup(state, action){
            const item = action.payload;
            state.userChecked = state.userChecked.filter((obj) => obj.id != item.id);
        }
    }
})

export const groupActions = groupSlice.actions;

export default groupSlice;
