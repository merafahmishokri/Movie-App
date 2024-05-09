import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { AddUser } from '../Redux/store/slices/userSlice';

const Register = () => {
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password: "",
        age: ""
    })
    const dispatch = useDispatch()
    const route =useNavigate()
    const handleNameChange = (event) => {
        setState({ ...state, name: event.target.value });
    }
    const handleEmailChange = (event) => {
        setState({ ...state, email: event.target.value });
    }
    const handlePasswordChange = (event) => {
        setState({ ...state, password: event.target.value });
    }
    const handleAgeChange = (event) => {
        setState({ ...state, age: event.target.value });
    }
    const RegisterClick = () => {
        
            let newUser = {
                id: uuid(),
                name: state.name,
                email: state.email,
                password: state.password,
                age: state.age
            };
            dispatch(AddUser(newUser))
            route("/login")
    };

    const styles = {

        '& .MuiInput-underline:after': { borderBottomColor: "#DFD0B8" },
        '& .MuiInputLabel-root.Mui-focused': { color: "#DFD0B8" },
        '& .MuiInputBase-root': {
            color: "#DFD0B8"
        },
        '& .MuiInputLabel-root': {
            color: "#DFD0B8",

        },
        '& .MuiInput-underline:before': {
            borderBottomColor: "#DFD0B8",
        },
        width: "300px"
    };
    return (
        <Box
            sx={{ paddingTop: "80px", paddingX: "80px" }}
            justifyContent={"center"} textAlign={"center"} width={"auto"} display={"flex"}
            role="presentation"
        >
            <Grid container spacing={2} >
                <Grid md={6}>
                    <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlZ2lzdGVyJTIwZm9yJTIwbW92aWUlMjBhcHB8ZW58MHx8MHx8fDA%3D" style={{ height: "600px", width: "80%", borderRadius: "15px" }} alt="background"></img>
                </Grid>
                <Grid md={6} sx={{ width: "80%", borderRadius: "15px", backgroundColor: "black", padding: "40px", paddingTop: "50px" }}>
                    <Grid md={12}>
                        <Typography variant='h4' color={"#DFD0B8"}> Register </Typography>
                    </Grid>
                    <Grid md={12} sx={{ padding: "15px" }}>
                        <TextField id="standard-basic" label="Full Name" variant="standard" sx={styles} value={state.name} onChange={handleNameChange} />
                    </Grid>
                    <Grid md={12} sx={{ padding: "15px" }}>
                        <TextField id="standard-basic" label="Email" variant="standard" sx={styles} value={state.email} onChange={handleEmailChange} />
                    </Grid>
                    <Grid md={12} sx={{ padding: "15px" }}>
                        <TextField id="standard-basic" label="Password" variant="standard" sx={styles} value={state.password} type="password" onChange={handlePasswordChange} />
                    </Grid>
                    <Grid md={12} sx={{ padding: "15px" }}>
                        <TextField id="standard-basic" label="Age" variant="standard" sx={styles} value={state.age} onChange={handleAgeChange} />
                    </Grid>
                    <Grid md={12} sx={{ padding: "15px" }}>
                        <Button sx={{ color: "white", backgroundColor: "#EADBC8", width: "200px", fontSize: "16pt" }} onClick={RegisterClick}>Register</Button>
                    </Grid>
                    <Grid md={12} sx={{ padding: "15px" }}>
                        <span style={{ color: "#DFD0B8" }}>Have an account? </span>
                        <Link to="/login" style={{ color: "#DFD0B8" }}>Login</Link>
                    </Grid>

                </Grid>
            </Grid>

        </Box>
    );
}

export default Register;
