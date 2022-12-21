import { createSlice } from '@reduxjs/toolkit';


export const userNameSlice = createSlice({
    name: 'userName',
    initialState: {
        userName: []
    },
    reducers: {
        setUserNames: ( state, action ) => {
            state.userName = action.payload
        },
        addUserName: ( state, action ) => {
            state.userName.push(action.payload)
        },
        updateUserName: ( state, action ) => {
            state.userName = state.userName.map( user => {
                if ( user.id === action.payload.id ){
                    user.userName = !user.userName
                }
                return user;
            })
        },
    }
});


// Action creators are generated for each case reducer function
export const { setUserNames, addUserName, updateUserName } = userNameSlice.actions;