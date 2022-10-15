import React from 'react'

export const MovieCard = ({title,rating,description,imgSrc}) => {
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <ul className="divide-y divide-gray-200">
        <li  className="py-4 flex">
          <div className="ml-3">
            <img alt='image ' src={imgSrc} width='260px' />
            <h3 className='p-3 font-medium' >{`Title :  ${title}`}</h3>
            <p className="text-sm font-medium text-gray-900 p-3">{`Description : ${description}`}</p>
            <p className="text-sm text-gray-500 p-3">{`Rating : ${rating}`}</p>
          </div>
        </li>
    </ul>
    </div>
  )
}
