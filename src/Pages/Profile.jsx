import { Box, Button, Grid,Paper, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUsers } from '../Redux/store/slices/userSlice';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const users=useSelector(state=>state.users.users)
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()
    const route=useNavigate()
    useEffect(()=>{
        dispatch(GetAllUsers())
        setUser(users.find(u => u.email === localStorage.getItem("email")))
      })
      const LogoutClick=()=>{
        localStorage.clear();
        route("/")
      }
      if (!user) return <div>loading...........</div>
    return (
        <div style={{width:"auto", display:"flex",justifyContent:"center"}}>
        <Box
      sx={{ padding:"150px"}}
       textAlign={"center"} width={"50%"}
      role="presentation"
    >
            <Grid container spacing={2} sx={{backgroundColor: "black",borderRadius: "15px",padding:"20px"}} justifyContent={"center"}>
                <Grid xs={8}>
                    <Paper sx={{color: "white", fontSize: "15pt", margin: "20px", borderRadius: "15px", backgroundColor: "black",height: "320px" }}>
                        <PersonIcon sx={{color:'#EADBC8',fontSize:"35pt"}}></PersonIcon>
                        <br></br>
                        <span style={{ fontWeight: "bold", marginx: "20px", fontSize:"20pt",color:"#EADBC8" }}>Full Name:</span>
                        <span style={{fontSize:"20pt",color:"#EADBC8" }}> {user.name} </span>
                        <br></br>
                        <br></br>
                        <span style={{ fontWeight: "bold", marginx: "20px", fontSize:"20pt",color:"#EADBC8" }}>Email: </span>
                        <span style={{fontSize:"20pt",color:"#EADBC8" }}>  {user.email} </span>
                        <br></br>
                        <br></br>
                        <span style={{ fontWeight: "bold", marginx: "20px", fontSize:"20pt",color:"#EADBC8" }}>Age: </span>
                        <span style={{fontSize:"20pt",color:"#EADBC8" }}> {user.age} </span>
                        <br></br>
                        <br></br>
                        <Button sx={{color:"white",backgroundColor:"#EADBC8", margin: "20px",width:"200px",fontSize:"16pt"}} onClick={LogoutClick}>Logout</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
        </div>
    );
}

export default Profile;
