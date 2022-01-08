import './App.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react";
import MovieList from './MovieList';




function Post ()  {

 const [movies, setMovies] = useState([
  {
    "adult": false,
    "backdrop_path": "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
    "genre_ids": [
        878,
        28
    ],
    "id": 580489,
    "original_language": "en",
    "original_title": "Venom: Let There Be Carnage",
    "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
    "popularity": 5004.938,
    "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    "release_date": "2021-09-30",
    "title": "Venom: Let There Be Carnage",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 1504
},
{
    "adult": false,
    "backdrop_path": "/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg",
    "genre_ids": [
        28,
        12,
        878
    ],
    "id": 438631,
    "original_language": "en",
    "original_title": "Dune",
    "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    "popularity": 3726.282,
    "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    "release_date": "2021-09-15",
    "title": "Dune",
    "video": false,
    "vote_average": 8,
    "vote_count": 3312
},
{
    "adult": false,
    "backdrop_path": "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
    "genre_ids": [
        35,
        28,
        12,
        878
    ],
    "id": 550988,
    "original_language": "en",
    "original_title": "Free Guy",
    "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
    "popularity": 1962.294,
    "poster_path": "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
    "release_date": "2021-08-11",
    "title": "Free Guy",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 3359
},
 ]);

 const getMovieRequest = async  () => {
   const url = 'https://api.themoviedb.org/3/movie/popular?api_key=1302f1643178cb33f37aa5210a658909&language=en-US&page=1';
   const response = await fetch(url);
   const responseJson = await response.json();
 

   
   setMovies(responseJson.results);
 };

 useEffect(() => {
   getMovieRequest();
  

 }, []);

  return(
      <div>
          <MovieList movies={movies}/>
      </div>
  )
  
}

export default Post;

