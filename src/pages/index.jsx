import React from 'react'
import { useEffect,useState } from 'react'
import { AddMovie } from '../components/addFilm/addMovie'
import { FilterMovie } from '../components/filter'
import { MovieCard } from '../components/movieCard'
import {Movies} from '../data'
import noimage from '../assets/noimage.webp'



const HomePage = () => {
  
  const [movieList, setMovieList] = useState([]);  
  const [lastMovieList, setLastMovieList] = useState([]);
  
  useEffect(()=>setMovieList(Movies),[]);
  useEffect(()=>setLastMovieList(Movies),[]);

  const addfilm=(titlem,descriptionm,ratingm)=>{
  const newobj={id:new Date().getTime(),title:titlem,rating:ratingm,imgSrc:noimage,description:descriptionm}
    setMovieList([...movieList,newobj])
  }

  const filterfunc=(text)=>{
    console.log(movieList)
    if(text==="") {setMovieList(lastMovieList)}
    else {setMovieList(movieList.filter((element)=>element.title.includes(text)||element.rating.includes(text)))}
  }  
  
  return (
    <>
    <AddMovie addfilm={addfilm} />
    <FilterMovie filterfunc={filterfunc} />
    <div className="grid grid-cols-4 gap-4 my-36">
    {movieList && movieList.map((item)=>(
      <MovieCard key={item.id} imgSrc={item.imgSrc} link={item.link} title={item.title} rating={item.rating} description={item.description} />
    ))}
    </div></>
  )
}

export default HomePage