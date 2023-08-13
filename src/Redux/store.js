import { configureStore } from "@reduxjs/toolkit";
import navReducer from './navSlice'
import weatherReducer from './weatherSlice'
let store = configureStore({
    reducer:{
        nav:navReducer,
        weather:weatherReducer
    }
})


export default store