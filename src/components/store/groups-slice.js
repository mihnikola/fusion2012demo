import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    groups:[]
};
const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        setGroups(state, action) {
            state.groups = [...state.groups, action.payload];
        },
       
    }
})

export const groupsActions = groupsSlice.actions;

export default groupsSlice;
