import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    favorites : []
}

const FavoriteSlice = createSlice({
    name:'AddToFavMenue',
    initialState,
    reducers:{
        toggleFavorite:(state,action)=>{
           const item = action.payload 
           const favorite = state.favorites.find(p => p.id === item.id)
           if(favorite){         
               state.favorites = [...state.favorites.filter(favorite => favorite.id !== item.id)]
           }else{
                state.favorites = [...state.favorites,action.payload]
           }
        },
        removeFavorite:(state,action)=>{
           const item = action.payload 
           state.favorites = [...state.favorites.filter(favorite => favorite.id !== item.id)]
        }
    }
})

export const {
    toggleFavorite,
    removeFavorite
} = FavoriteSlice.actions

export default FavoriteSlice.reducer