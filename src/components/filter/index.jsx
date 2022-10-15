import React from 'react'

export const FilterMovie = ({filterfunc}) => {
    return (
    <div className='mx-40'>
    <h2 className='text-center font-bold text-4xl mt-10 mb-5'>Filter your movies here</h2>
    <input type="text" id="text" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title " 
    onChange={(e)=>filterfunc(e.target.value)} />
    </div>
  )
}
