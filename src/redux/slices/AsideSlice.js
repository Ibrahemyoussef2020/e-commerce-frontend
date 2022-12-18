import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    open:false
}

const AsideSlice = createSlice({
    name:'AsideTransform',
    initialState,
    reducers:{
        toggleSide:(state)=>{
            state.open = state.open === false ? true : false
        },
        closeSide:(state)=>{
            state.open = false
        }
    }
})

export const {
    toggleSide,
    closeSide
} = AsideSlice.actions

export default AsideSlice.reducer