/***** Note: userReducer *****/

import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
    userName: "Ahmed",
    todoBucket: [],
    users: []
};

const userSlice = createSlice({
    name: "user",
    initialState: initialStates,
    reducers: {
        updateUserName: (state, action) => {
            let { payload } = action;
            console.log('Payload: ', payload);
            state.userName = payload;
        },

        addItem: (state, action) => {
            let { payload } = action;
            console.log('Payload: ', payload);

            let todoBucketClone = [...state.todoBucket];
            todoBucketClone.push(payload);
            state.todoBucket = todoBucketClone;
        },

        deleteItem: (state, action) => {
            let { payload } = action;
            console.log('Payload: ', payload);

            let todoBucketClone = [...state.todoBucket];
            todoBucketClone.splice(payload, 1);
            state.todoBucket = todoBucketClone;
        },

        updateItem: (state, action) => {
            let { payload } = action;
            console.log('Payload: ', payload);

            let todoBucketClone = [...state.todoBucket];
            todoBucketClone.splice(
                payload.key,
                1,
                payload.newValue
            );
            state.todoBucket = todoBucketClone;
        },

        deleteAllItems: (state, action) => {
            state.todoBucket = [];
        },

        getAllUsers: (state, action) => {
            let { payload } = action;
            // console.log('Payload: ', payload);
            state.users = payload;
        }
    }
});

export const
    {
        updateUserName,
        addItem,
        deleteItem,
        updateItem,
        deleteAllItems,
        getAllUsers
    } = userSlice.actions;
export default userSlice.reducer;


// let obj = {
//     a : "ahmed",
//     b: "bilal",
//     c : "cat"
// };

// let { a } = obj;

// console.log(obj.a) // ahmed