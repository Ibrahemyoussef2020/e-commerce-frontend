import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products : []
}

const ShoppingSlice = createSlice({
    name:'BuyProducts',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
           const item = action.payload 
           const product = state.products.find(p => p.id === item.id)
           const qty = item.qty
           if(product){         
                state.products = [...state.products.map(product => product.id === item.id ? {...product , qty : product.qty + 1,total: (product.qty + 1) * product.price} : product)]
           }else{
                state.products = [...state.products,action.payload]
           }
        },
        removeProduct:(state,action)=>{
           const item = action.payload 
           state.products = [...state.products.filter(product => product.id !== item.id)]
        },
        incrementProduct:(state,action)=>{
            const item = action.payload
            const qty = item.qty
            state.products = [...state.products.map(product => product.id === item.id ? {...product , qty : product.qty + 1,total: (product.qty + 1) * product.price} : product)]
        },
        decrementProduct:(state,action)=>{
            const item = action.payload
            const qty = item.qty
            state.products = [...state.products.map(product => product.id === item.id ? {...product , qty : product.qty - 1,total: (product.qty - 1) * product.price} : product)]
        }
    }
})

export const {
    addProduct,
    removeProduct,
    incrementProduct,
    decrementProduct
} = ShoppingSlice.actions

export default ShoppingSlice.reducer