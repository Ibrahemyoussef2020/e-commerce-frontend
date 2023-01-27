import {createSlice} from '@reduxjs/toolkit'

const storageFavorites = localStorage.getItem('favorites') !==  null ? JSON.parse(localStorage.getItem('favorites')) : []

const initialState = {
    favorites : storageFavorites
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

           localStorage.setItem('favorites',JSON.stringify(state.favorites.map(favorite => favorite)))
        },
        removeFavorite:(state,action)=>{
           const item = action.payload 
           state.favorites = [...state.favorites.filter(favorite => favorite.id !== item.id)]

           localStorage.setItem('favorites',JSON.stringify(state.favorites.map(favorite => favorite)))
        }
    }
})

export const {
    toggleFavorite,
    removeFavorite
} = FavoriteSlice.actions

export default FavoriteSlice.reducer