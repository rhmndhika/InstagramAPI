import React from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';


const rahasia = "https://api.themoviedb.org/3/movie/popular?api_key=1302f1643178cb33f37aa5210a658909&language=en-US&page=1";

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          p: 1,
          m: 1,
          borderRadius: 1,
          textAlign: 'center',
          fontSize: '1rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };



const MovieList = (props) =>{
    return(
        <>
            {props.movies.map((movie, index) => 
                <div style={{ width: '100%' }}>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    }}
                >   
                <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt="image" ></img> 
            </Box>
            </div>   
            )}
        </>
    )
}

export default MovieList;

{/* <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt="image" ></img>     
<h1>{movie.title}</h1>
<p>{movie.overview}</p>       
<h2>{movie.release_date}</h2>   */}