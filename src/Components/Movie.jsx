import * as React from 'react';
import Paper from '@mui/material/Paper';
import { IconButton, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useDispatch } from 'react-redux';
import { Addfavorites, DeleteFavorite } from '../Redux/store/slices/favoriteSlice';

const MovieHook = (props) => {
    // console.log(props);
    const {poster_path,title,release_date,vote_average,id,original_language,overview}=props;
    const route=useNavigate()
    const handleClick=()=>{
        route("/details/"+id)
    }
    const [flag,setFlage]=React.useState(false)
    const dispatch=useDispatch()
    const AddToFavorite=()=>{
        if(flag==false){
            setFlage(true)
            dispatch(Addfavorites({
                id:id,
                original_language: original_language,
                overview: overview,
                poster_path: poster_path,
                release_date: release_date,
                title: title,
                vote_average: vote_average
              }))
        }else
        {
            setFlage(false)
            dispatch(DeleteFavorite(id))
        }
    }
    return (
        <Paper
        sx={{width:"18.5%",color:"white",fontSize:"15pt",margin:"20px", borderRadius:"15px",
        backgroundColor:"black"}} 
         elevation={3}>
            <IconButton sx={{backgroundColor:"#45474B",opacity:"0.9",borderRadius:"20px",position:"absolute",margin:"10px"}} onClick={AddToFavorite}>
            {flag ==false?<FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                    :<FavoriteOutlinedIcon sx={{color:"error.dark"}}></FavoriteOutlinedIcon>
            }
            </IconButton>
            <Rating name="half-rating-read" value={vote_average/2} precision={0.1} readOnly sx={{backgroundColor:"#45474B",opacity:"0.9",borderRadius:"20px",position:"absolute",margin:"10px",marginLeft:"10%"}} />
            <img  onClick={handleClick} src={"https://image.tmdb.org/t/p/w500/"+poster_path} style={{width:"100%",borderRadius:"15px",height:"300px"}} alt="movie"></img>
            <div  onClick={handleClick} style={{margin:"20px"}}>
            <div  onClick={handleClick} style={{fontWeight:"bold"}}>{title} ({(release_date+"").split("-")[0]})</div>
            </div>
        </Paper> 
    );
}

export default MovieHook;


















