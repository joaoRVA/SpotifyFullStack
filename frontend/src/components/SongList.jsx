import React, { useState } from 'react'
import SongItem from './SongItem'

const SongList = ({songList}) => {
  const [items, setItems] = useState(5)

  return (
    <div className='song-list'>
        {songList.filter((currentValue, index) => index < items).map((currentObj, index) =>
           <SongItem {...currentObj} index={index} key={index}/> )}
        
        <p className='song-list__see-more' onClick={() => setItems(items + 5)}>Ver Mais</p>
    </div>
  )
}

export default SongList