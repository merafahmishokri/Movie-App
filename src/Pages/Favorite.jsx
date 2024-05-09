import React, { useEffect } from 'react';
import FavoriteItem from '../Components/favoriteItem';
import { GetAllFavorites } from '../Redux/store/slices/favoriteSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

const Favorite = () => {
    const favorites=useSelector(state=>state.favorites.favorites)
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(GetAllFavorites())
    })
    const route=useNavigate()
    const handleClick=()=>{
        route("/home")
    }
    if (favorites.length<1) return(
        <>
        <div style={{color:"white",padding:"100px",fontSize:"30pt",textAlign:"start"}}>
            Nothing in Favorites 
        </div>
        <Button onClick={handleClick} sx={{color:"white",textAlign:"start",backgroundColor:"#EADBC8",width:"300px",fontSize:"16pt"}}>Go to home</Button>
        </>
        
    )
    return (
        <div style={{padding:"50px"}}>
            {favorites.map(f=><FavoriteItem {...f}></FavoriteItem>)}
        </div>
    );
}

export default Favorite;
