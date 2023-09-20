import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList({genereId, selectedGenresName}) {

    const [genreList, setGenreList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        getGenreList();
    },[])
    const getGenreList = () => {
        GlobalApi.getGenreList.then((resp)=>{
            setGenreList(resp.data.results);
        })
    }

  return (
    <div className=''>
        <h3 className='font-bold text-[30px] dark:text-white '>Genres</h3>
        {genreList.map((item,index)=>(
            <div key={index}
            onClick={()=>{setActiveIndex(index); genereId(item.id); selectedGenresName(item.name)}}
            className={`flex gap-3 items-center mb-2 cursor-pointer 
            hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600
          ${activeIndex==index?"bg-slate-300 dark:bg-gray-700 ":null}`} 
          >
                <img src={item.image_background} className={`w-[40px] h-[40px] 
                object-cover rounded-lg group-hover:scale-150  
                transition-all duration-300 ${activeIndex==index?"scale-150":null} `}/>
                <h3 className={`text-[18px] group-hover:font-bold    dark:text-white
                transition-all duration-300 ${activeIndex==index?"font-semibold":null}`}>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default GenreList
