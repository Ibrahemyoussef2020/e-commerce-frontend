import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    brand:'all'
}

const MobileSlice = createSlice({
    name:'MobileFilter',
    initialState,
    reducers:{
        filterBrand:(state,action)=>{
            state.brand = action.payload || 'all'
        }
    }
})

export const {
    filterBrand
} = MobileSlice.actions

export default MobileSlice.reducer