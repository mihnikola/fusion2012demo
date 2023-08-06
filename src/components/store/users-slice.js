import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [
            {
                id: 1,
                name: "nenad",
                lastName: "radovic",
                email: "nenad.radovic@example.rs",
                active: 1,
                type: 0

            }, {
                id: 3,
                name: "uros",
                lastName: "radovic",
                email: "uros.radovic@example.rs",
                active: 1,
                type: 0

            },
            {
                id: 55,
                name: "rados",
                lastName: "radovic",
                email: "rados.radovic@example.rs",
                active: 1,
                type: 0

            }, {
                id: 550,
                name: "mihajlo",
                lastName: "radovic",
                email: "mihajlo.radovic@example.rs",
                active: 1,
                type: 0

            }, {
                id: 88,
                name: "sinisa",
                lastName: "radovic",
                email: "sinisa.radovic@example.rs",
                active: 1,
                type: 0

            }, {
                id: 123,
                name: "jovan",
                lastName: "radovic",
                email: "jovan.radovic@example.rs",
                active: 1,
                type: 0

            }, {
                id: 2222,
                name: "mile",
                lastName: "radovic",
                email: "mile.radovic@example.rs",
                active: 1,
                type: 0

            }, {
                id: 2323222,
                name: "misko",
                lastName: "radovic",
                email: "misko.radovic@example.rs",
                active: 1,
                type: 0

            }, {
                id: 29292,
                name: "zarko",
                lastName: "radovic",
                email: "zarko.radovic@example.rs",
                active: 1,
                type: 0

            }
        ]
    },
    reducers: {
        getUsers(state, action) {
            state.users = [...state.users, action.payload];
        },
        editUser(state, action) {
            let users = [...state.users];
            let ind_obj = users.findIndex((user) => user.id == action.payload.id)
            users[ind_obj].name = action.payload.name;
            users[ind_obj].lastName = action.payload.lastName;
            if(action.payload.active){
                users[ind_obj].active = 1;
            }else{
                users[ind_obj].active = 0;
            }
            users[ind_obj].email = action.payload.email;

        }
    }
})

export const usersActions = usersSlice.actions;

export default usersSlice;
