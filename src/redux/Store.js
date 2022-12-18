import { configureStore } from "@reduxjs/toolkit";
import {
shopping,
mobile,
aside,
favorite
} from "./slices";


const store = configureStore({
    reducer:{
        shopping:shopping,
        mobile:mobile,
        aside:aside,
        favorite:favorite
    },
    devTools:false
})

export default store