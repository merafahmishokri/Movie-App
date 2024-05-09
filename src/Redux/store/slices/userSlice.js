import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetAllUsers=createAsyncThunk("users/getAll",async()=>{
    const data=await axios.get("http://localhost:3001/users")
    console.log(data.data)
    return data.data
})
export const EdiUser=createAsyncThunk("users/edit",async({id,user})=>{
   console.log(user);
    await axios.put("http://localhost:3001/users/"+id,user);
    
})
export const DeleteUser=createAsyncThunk("movies/delete",async(id)=>{
     await axios.delete("http://localhost:3001/users/"+id);
     
 })
 export const AddUser=createAsyncThunk("movies/add",async(user)=>{
    await axios.post("http://localhost:3001/users",user);
    
})
const UsersSlice=createSlice({
    name:"users",
    initialState:{users:[]},
    extraReducers:(builder)=>{
        builder.addCase(GetAllUsers.fulfilled,(state,action)=>{
            state.users=action.payload
        })
       
    }
})

export default  UsersSlice.reducer;