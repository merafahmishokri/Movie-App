import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetAllMovies=createAsyncThunk("movies/getAll",async()=>{
    const data=await axios.get("http://localhost:3001/results")
    console.log(data.data)
    return data.data
})
export const EditMovie=createAsyncThunk("movies/edit",async({id,movie})=>{
   console.log(movie);
    await axios.put("http://localhost:3001/results/"+id,movie);
    
})
export const DeletMovie=createAsyncThunk("movies/delete",async(id)=>{
     await axios.delete("http://localhost:3001/results/"+id);
     
 })
 export const AddMovie=createAsyncThunk("movies/add",async(movie)=>{
    await axios.post("http://localhost:3001/results",movie);
    
})
const moviesSlice=createSlice({
    name:"movies",
    initialState:{movies:[]},
    extraReducers:(builder)=>{
        builder.addCase(GetAllMovies.fulfilled,(state,action)=>{
            state.movies=action.payload
        })
       
    }
})

export default  moviesSlice.reducer;