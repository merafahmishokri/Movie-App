import { Grid,Paper, Rating } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { DeleteFavorite } from '../Redux/store/slices/favoriteSlice';

const FavoriteItem = (props) => {
    const {poster_path,title,release_date,vote_average,id,original_language,overview}=props;
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(DeleteFavorite(id));
    }
    return (
        <div style={{padding: "40px"}}>
            <Grid container spacing={2} sx={{backgroundColor: "black",borderRadius: "15px"}}>
                <Grid xs={4}>
                    <Paper
                        sx={{
                            color: "white", margin: "20px", borderRadius: "15px",
                            height: "360px"    
                        }}>
                        <Rating name="half-rating-read" value={vote_average/2} precision={0.1} readOnly sx={{backgroundColor:"#45474B",opacity:"0.9",borderRadius:"20px",position:"absolute",margin:"10px"}} />
                        <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} style={{ width: "100%", borderRadius: "15px", height: "360px" }} alt="movie"></img>
                    </Paper>
                </Grid>

                <Grid xs={8} sx={{ textAlign:"start"}}>
                    <Paper sx={{color: "white", fontSize: "15pt", margin: "20px", borderRadius: "15px", backgroundColor: "black",height: "320px" }}>
                    <Grid xs={12} display={"flex"} justifyContent={"end"} sx={{marginRight:"20px",marginTop:"20px"}}>
                    <CloseOutlinedIcon sx={{color:"white"}} onClick={handleClick}></CloseOutlinedIcon>
                </Grid>
                        <div style={{ fontWeight: "bold", margin: "16px", fontSize:"20pt" }}>{title}</div>
                        <DateRangeIcon sx={{paddingLeft:"50px"}}></DateRangeIcon>
                        <span style={{ margin: "20px" }}><b>Release Date: </b>{release_date }</span>
                        <br></br>
                        <div style={{paddingLeft:"50px", marginTop:"30px"}}>
                        <DescriptionOutlinedIcon></DescriptionOutlinedIcon>
                        <span style={{ fontWeight: "bold", margin: "20px", fontSize:"19pt" }}>Overview</span>
                        <div style={{ margin: "12px" }}> {overview}</div>
                        </div>
                        <LanguageIcon sx={{paddingLeft:"50px", marginTop:"10px"}}></LanguageIcon>
                        <span style={{ margin: "20px" }}><b>Language: </b>{original_language==="en"?"English":original_language==="fr"?"French":original_language==="hi"?"Indian":"Korean"}</span>
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default FavoriteItem;
