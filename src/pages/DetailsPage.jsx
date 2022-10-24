import {Movies} from '../data/index'
import { useState,useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import YoutubeEmbed from '../components/Youtube/youtubeEmbeded'
import { useParams } from 'react-router-dom'

const DetailsPage = () => {
  const params=useParams();
  const [movie, setMovie] = useState([]);
  const [film, setFilm] = useState([]);
  useEffect(() => {
  setMovie(Movies)
}, []);

  return (
    <>
    <div className='text-center'>
    <h1 className='font-bold font-medium text-center py-10'>{params.title}</h1>
    <YoutubeEmbed embedId={params.link} />
    <div className="relative -top-80 ">
    <div className='absolute top-10 left-96 '>
    <h1 className='font-bold'>Description : </h1>
    <p>{params.desc}</p>
    </div>
    <Link to='/' className='absolute top-32 left-96'>
    <button  className=" text-white bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-10 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to HomePage</button>
    </Link>
    </div>
    </div>

    </>
  )
}

export default DetailsPage