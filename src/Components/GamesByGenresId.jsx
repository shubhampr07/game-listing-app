import React, { useEffect } from 'react'

function GamesByGenresId({gameList, selectedGenresName}) {

    useEffect(() => {

    }, [])

  return (
    <div>
        <h2 className='dark:text-white mt-6 font-semibold text-[30px]'>{selectedGenresName} Games</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    gap-6 mt-5'>
      {gameList.map((item) => (
        <div className='bg-[#76a8f75e] p-3 rounded-lg pb-10 h-full 
        hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
            <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover' />
            <h2 className='dark:text-white text-[20px] font-semibold'>{item.name}<span className='p-1 
            rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium'>{item.metacritic}</span></h2>
            <h2 className='text-gray-500 dark:text-gray-300'>⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}

export default GamesByGenresId
