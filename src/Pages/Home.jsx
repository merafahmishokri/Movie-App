import React from 'react';
import MoviesApplication from '../Components/Movies';
import Layout from './Layout';


const Home = () => {
    return (
        <div>
            <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{height:"500px",width:"100%"}} alt="background"></img>
            <MoviesApplication></MoviesApplication>
            
        </div>
    );
}

export default Home;
