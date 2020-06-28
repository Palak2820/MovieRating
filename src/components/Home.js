import React,{useState,useEffect} from 'react';
import {
  API_URL,
  API_KEY,
  API_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
} from '../config'

import HeroImage from './elements/Heroimage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadmoreBtn from './elements/LoadmoreBtn';
import Spinner from './elements/Spinner'

const Home = () =>{
  return( <>
    <HeroImage/>
  <SearchBar/>
  <Grid/>
  <MovieThumb/>
  <LoadmoreBtn/>
  <Spinner/>
    </>
    )
 

}


export default Home;
