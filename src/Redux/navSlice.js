import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    navHeight: 60
}


export let navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers:{
        setNavHeight:(state,action)=>{
            state.navHeight=action.payload
        }
    }
})

export const {setNavHeight} = navSlice.actions

export default navSlice.reducer
