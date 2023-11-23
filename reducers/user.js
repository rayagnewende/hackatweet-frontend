import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value:{
        isConnected:"", 
        username:""
    }
}


export const userSlice = createSlice({
    name:"user", 
    initialState, 
    reducers: {
        login:(state, action) => {
            state.value.isConnected = action.payload.isConnected, 
            state.value.username = action.payload.username; 
        }, 
        logout:(state, action) =>{
            state.value.isConnected = ""
            state.value.username=""
        }
    }
})


export const { login, logout} = userSlice.actions ; 
export default userSlice.reducer; 