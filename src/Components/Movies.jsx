import { useDispatch, useSelector } from 'react-redux';
import MovieHook from './Movie';
import { useEffect } from 'react';
import { GetAllMovies } from '../Redux/store/slices/movieSlice';

import AddDrawer from './AddDrawer';

const MoviesApplication = () => {
    // const movies= useLoaderData().data;
    const movies=useSelector(state=>state.movies.movies)
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(GetAllMovies())
    })

    if(!movies) return <div>Loading......</div>
    return (
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            {movies.map(m=><MovieHook {...m}></MovieHook>)}
            <AddDrawer></AddDrawer>
        </div> 
    );
}

export default MoviesApplication;
