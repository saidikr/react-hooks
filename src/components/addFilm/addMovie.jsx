import React from 'react'
import { useState } from 'react';

export const AddMovie = ({addfilm}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  return (
    <div className='pt-10'>
    <h2 className='text-center font-bold text-4xl '>you can add your movie here</h2>
    <form className='mx-40 text-center mt-5'>
    <input type="text" id="text" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title " 
    onChange={(e)=>setTitle(e.target.value)} />
    <input type="text" id="text" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" 
    onChange={(e)=>setDescription(e.target.value)} />
    <input type="text" id="text" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating" 
    onChange={(e)=>setRating(e.target.value)} />
        <button  className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-10 py-5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e)=>{e.preventDefault();addfilm(title,description,rating)}} >Add</button>  
    </form>
    </div>
  )
}
