import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name:'user',
    initialState: {
        user: {},
        id: "",
        name: "",
        lastName: "",
        active : false,
        email: "",
        error: ""
    },
    
    reducers:{
        getUser(state, action){
            const {id, name, email,lastName,active} = action.payload.user;
            state.user = action.payload.user;
            state.id = id;
            state.name = name;
            state.email = email;
            state.lastName = lastName;
            if (active === 1){
                state.active = true;
            }else{
                state.active = false;
            }
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
            state.active = action.payload;
        },
        editReset(state,action){
            state.user = action.payload;
        },
        
        editError(state, action){
            state.error = action.payload;
        },
        submitChanges(state, action){
            state.error = action.payload;
        }

    }
})

export const userActions = userSlice.actions;

export default userSlice;
