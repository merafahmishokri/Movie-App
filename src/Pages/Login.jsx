import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { GetAllUsers } from '../Redux/store/slices/userSlice';

const Login = () => {
    const [state, setState] = React.useState({
        email:"",
        password:"",
        flag:false
      })
      const users=useSelector(state=>state.users.users)
      const [user, setUser] = useState(null)
        const dispatch = useDispatch()
        const route=useNavigate()
      const handleEmailChange=(event)=>{
        setState({ ...state, email:event.target.value});
      }
      const handlePasswordChange=(event)=>{
        setState({ ...state, password:event.target.value});
      }
      useEffect(()=>{
        dispatch(GetAllUsers())
        setUser(users.find(u => u.email === state.email))
      })
      const LoginClick = ()=> {
        if(user&&user.password===state.password){
            localStorage.setItem("email",user.email)
            setState({...state,flag:false})
            
            route("/home")
            
        }else{
            setState({...state,flag:true})
        }
        
      };
      
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
          width:"300px"
      };
    return (
        <Box
      sx={{ paddingTop:"80px",paddingX:"80px"}}
      justifyContent={"center"} textAlign={"center"} width={"auto"} display={"flex"}
      role="presentation"
    >
        <Grid container spacing={2}>
            <Grid md={6}>
            <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{height:"600px",width:"80%",borderRadius:"15px"}} alt="background"></img>
            </Grid>
            <Grid md={6}  sx={{width:"80%",borderRadius:"15px",backgroundColor:"black",padding:"40px",paddingTop:"140px"}}>
            <Grid md={12}>
                <Typography variant='h4' color={ "#DFD0B8"}> Login </Typography>
            </Grid>
            <Grid md={12} sx={{padding:"15px"}}>
            <TextField id="standard-basic" label="Email" variant="standard" sx={styles} value={state.email} onChange={handleEmailChange}/>
            </Grid>
            <Grid md={12} sx={{padding:"15px"}}>
            <TextField id="standard-basic" label="Password" variant="standard"  sx={styles} value={state.password} type="password" onChange={handlePasswordChange}/>
            </Grid>
            <Grid md={12} sx={{padding:"15px"}}>
            <Button sx={{color:"white",backgroundColor:"#EADBC8",width:"200px",fontSize:"16pt"}} onClick={LoginClick}>Login</Button>
            </Grid>
            <Grid md={12} sx={{padding:"15px"}}>
                <span style={{color:"#DFD0B8"}}>Don't have an account? </span>
                <Link to="/" style={{color:"#DFD0B8"}}>Register</Link>
            </Grid>
            {state.flag&&<Grid md={12} sx={{padding:"15px"}}>
                <span style={{color:"red"}}>Invalid email or password </span>
            </Grid>}
            </Grid>
        </Grid>

    </Box>
    );
}

export default Login;
