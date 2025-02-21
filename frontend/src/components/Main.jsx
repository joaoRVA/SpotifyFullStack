import React from 'react'
import {artistArray} from '../assets/database/artists'
import ItemList from './ItemList'
import { songsArray } from '../assets/database/songs'

const Main = ({type}) => {
  return (
    <>
        <div className='main'>
          {type === 'artists' || type === undefined ? 
          <ItemList title={"Artistas Populares"}
            items={5}
            itemArray={artistArray}
            path="/artists"
            idPath="/artist"
            /> : null}
            
          {type === 'songs' || type === undefined ?
            <ItemList title={"Músicas Populares"}
            items={16}
            itemArray={songsArray}
            path="/songs"
            idPath="/song"
               /> : null}
            
        </div>
    </>
  )
}

export default Main