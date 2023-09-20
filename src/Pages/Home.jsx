import React, { useEffect, useState } from 'react';
import GenreList from '../Components/GenreList';
import GlobalApi from '../Services/GlobalApi';
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesByGenresId from '../Components/GamesByGenresId'

function Home() {

  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState('Action');



  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  },[])
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results)
      
    })
  }

  const getGameListByGenresId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      console.log("Game list by genreId",resp.data.results);
      setGameListByGenres(resp.data.results)
    })
  }

  return (
    <div className='grid grid-cols-4 px-5'>
      <div className=' h-full hidden md:block'>
        <GenreList genereId={(genereId) => getGameListByGenresId(genereId)} 
        selectedGenresName={(name)=>setSelectedGenresName(name)} />
      </div>
      <div className='col-span-4 md:col-span-3'>
        {allGameList?.length>0 && gameListByGenres.length>0 ? 
        <div>
          <Banner gameBanner={allGameList[0]} />
          <TrendingGames gameList={allGameList} />
          <GamesByGenresId gameList={gameListByGenres} 
          selectedGenresName={selectedGenresName} />
        </div>
         : null}
      </div>
    </div>
  )
}

export default Home
