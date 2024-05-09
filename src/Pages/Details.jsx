import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { GetAllMovies } from '../Redux/store/slices/movieSlice';
import { Grid, Paper, Rating } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import StarRateIcon from '@mui/icons-material/StarRate';
import LanguageIcon from '@mui/icons-material/Language';
import AnchorTemporaryDrawer from '../Components/Drawer';

const Details = () => {
    const movieId = useParams().id;
    const movies = useSelector(state => state.movies.movies)
    const [movie, setMovie] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAllMovies())
        setMovie(movies.find(item => item.id === movieId))
    })
    if (!movie) return <div>Loading......</div>
    return (
        <div style={{padding: "90px"}}>
            
            <Grid container spacing={2}>
                <Grid xs={12} sx={{ textAlign:"start"}}>
                <Link to="/home" style={{color:"#DFD0B8"}}>Back To Home</Link>
                </Grid>
                <Grid xs={4}>
                    <Paper
                        sx={{
                            color: "white", margin: "20px", borderRadius: "15px",
                            backgroundColor: "black",height: "600px"    
                        }}>
                        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} style={{ width: "100%", borderRadius: "15px", height: "600px" }} alt="movie"></img>
                    </Paper>
                </Grid>
                <Grid xs={8} sx={{ textAlign:"start"}}>
                    <Paper sx={{color: "white", fontSize: "15pt", margin: "20px",padding:"40px", borderRadius: "15px", backgroundColor: "black",height: "520px" }}>
                        <div style={{ fontWeight: "bold", margin: "20px", fontSize:"25pt" }}>{movie.title}</div>
                        <DateRangeIcon sx={{paddingLeft:"50px"}}></DateRangeIcon>
                        <span style={{ margin: "20px" }}><b>Release Date: </b>{movie.release_date }</span>
                        <br></br>
                        <div style={{paddingLeft:"50px", marginTop:"30px"}}>
                        <DescriptionOutlinedIcon></DescriptionOutlinedIcon>
                        <span style={{ fontWeight: "bold", margin: "20px", fontSize:"22pt" }}>Overview</span>
                        <div style={{ margin: "20px" }}> {movie.overview}</div>
                        </div>
                        
                        <StarRateIcon sx={{paddingLeft:"50px" , marginTop:"30px"}}></StarRateIcon>
                        <span style={{ margin: "20px" }}><b>Rating: </b>{movie.vote_average}</span>
                        <br></br>
                        <LanguageIcon sx={{paddingLeft:"50px", marginTop:"30px"}}></LanguageIcon>
                        <span style={{ margin: "20px" }}><b>Language: </b>{movie.original_language==="en"?"English":movie.original_language==="fr"?"French":movie.original_language==="hi"?"Indian":"Korean"}</span>
                        <Grid xs={12} sx={{ textAlign:"end"}} marginTop={"30px"} >
                        <AnchorTemporaryDrawer {...movie}></AnchorTemporaryDrawer>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default Details;
