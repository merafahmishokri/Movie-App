import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Grid, TextField, Typography } from '@mui/material';
import { DeletMovie, EditMovie } from '../Redux/store/slices/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AnchorTemporaryDrawer(props) {

  const {title,release_date,vote_average,id,overview,original_language,poster_path}=props;
  const [state, setState] = React.useState({
    bottom: false,
    name:title,
    date:release_date,
    rating:vote_average,
    language:original_language,
    overview:overview
  })
  
    const dispatch = useDispatch()
    const route=useNavigate()
  const handleNameChange=(event)=>{
    setState({ ...state, name:event.target.value});
  }
  const handleDateChange=(event)=>{
    setState({ ...state, date:event.target.value});
  }
  const handleRatingChange=(event)=>{
    setState({ ...state, rating:event.target.value});
  }
  const handleLanguageChange=(event)=>{
    setState({ ...state, language:event.target.value});
  }
  const handleOverviewChange=(event)=>{
    setState({ ...state, overview:event.target.value});
  }
  const toggleDrawer = (open) => (event) => {
    if(event.target.id==="confirm"){
        let newMovie={
            original_language: state.language,
            overview: state.overview,
            poster_path: poster_path,
            release_date: state.date,
            title: state.name,
            vote_average: state.rating
          };
        dispatch(EditMovie({id,movie:newMovie}))
    }
    setState({ ...state, ['bottom']: open });
  };
  const DeleteMovie=()=>{
    dispatch(DeletMovie(id))
    route("/home")
  }
  
  const styles = {
    
    '& .MuiInput-underline:after': {borderBottomColor: "#DFD0B8"},
    '& .MuiInputLabel-root.Mui-focused': {color: "#DFD0B8"},
    '& .MuiInputBase-root': {
        color: "#DFD0B8"
      },
      '& .MuiInputLabel-root': {
        color: "#DFD0B8", 
        
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: "#DFD0B8",
      },
      width:"400px"
  };
  const list = () => (
    <Box
      sx={{ width: 'auto',backgroundColor:"black"}}
      role="presentation"
    >
        <Grid container spacing={2} sx={{padding:"40px"}}>
            <Grid md={12}>
                <Typography variant='h5' color={ "#DFD0B8"}> Edit Movie</Typography>
            </Grid>
            <Grid md={6} sx={{padding:"15px"}}>
            <TextField id="standard-basic" label="Movie Name" variant="standard" sx={styles} value={state.name} onChange={handleNameChange}/>
            </Grid>
            <Grid md={6} sx={{padding:"15px"}}>
            <TextField id="standard-basic" label="Release Date" variant="standard" sx={styles} value={state.date} onChange={handleDateChange}/>
            </Grid>
            <Grid md={6} sx={{padding:"15px"}}>
            <TextField id="standard-basic" label="Rating" variant="standard"  sx={styles} value={state.rating} onChange={handleRatingChange}/>
            </Grid>
            <Grid md={6} sx={{padding:"15px"}}>
            <TextField id="standard-basic" label="Language" variant="standard"  sx={styles} value={state.language} onChange={handleLanguageChange}/>
            </Grid>
            <Grid md={6} sx={{padding:"15px"}}>
            <TextField id="standard-basic" label="Overview" variant="standard" sx={styles} value={state.overview} onChange={handleOverviewChange}/>
            </Grid>
            <Grid md={3} sx={{padding:"15px",textAlign:"end"}}>
            <Button onClick={toggleDrawer(false)} sx={{color:"white",backgroundColor:"#EADBC8",width:"120px",fontSize:"16pt"}} id="confirm">Confirm</Button>
            </Grid>
            <Grid md={3} sx={{padding:"15px",textAlign:"start"}}>
            <Button onClick={toggleDrawer(false)} sx={{color:"white",backgroundColor:"#EADBC8",width:"120px",fontSize:"16pt"}}>Cancel</Button>
            </Grid>
        </Grid>

    </Box>
  );

  return (
    <div>
        <React.Fragment key="bottom">
          <Button onClick={toggleDrawer(true)} sx={{color:"white",backgroundColor:"#EADBC8",width:"110px",fontSize:"16pt"}}>Edit</Button>
          <Button onClick={DeleteMovie} sx={{color:"white",backgroundColor:"#EADBC8",width:"110px",fontSize:"16pt",marginLeft:"20px"}}>delete</Button>
          <Drawer
            anchor='bottom'
            open={state['bottom']}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
     
    </div>
  );}
