import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetAllFavorites=createAsyncThunk("favorites/getAll",async()=>{
    const data=await axios.get("http://localhost:3001/favorites")
    console.log(data.data)
    return data.data
})
export const EditFavorite=createAsyncThunk("favorites/edit",async({id,movie})=>{
   console.log(movie);
    await axios.put("http://localhost:3001/favorites/"+id,movie);
})
export const DeleteFavorite=createAsyncThunk("favorites/delete",async(id)=>{
     await axios.delete("http://localhost:3001/favorites/"+id);
     
 })
 export const Addfavorites=createAsyncThunk("favorites/add",async(movie)=>{
    await axios.post("http://localhost:3001/favorites",movie);
    
})
const favoritesSlice=createSlice({
    name:"favorites",
    initialState:{favorites:[]},
    extraReducers:(builder)=>{
        builder.addCase(GetAllFavorites.fulfilled,(state,action)=>{
            state.favorites=action.payload
        })
       
    }
})

export default  favoritesSlice.reducer;