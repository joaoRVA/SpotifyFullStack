import React from 'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'
const Song = () => {
  const {id} = useParams()
  const {image, name, duration, artist, audio} = songsArray.filter((currentMusicObj) => currentMusicObj._id === id)[0]

  const artistObj = artistArray.filter((currentObj) => currentObj.name === artist)[0]

  const songsListFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === artist)
  const randomId = Math.floor(Math.random() * (songsListFromArtist.length - 1))
  const randomId2 = Math.floor(Math.random() * (songsListFromArtist.length - 1))
  const randomIdFromArtist = songsListFromArtist[randomId]._id
  const randomIdFromArtist2 = songsListFromArtist[randomId]._id

  return (
    <div className='song'>
      <div className="song__container">
      <div className="song__image-container">
        <img src={image} alt={`Musica ${name}`} />
      </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className='song__artist-image'>
          <img width={75} height={75} src={artistObj.image} alt={`Artista ${artist}`} />
        </Link>

        <Player audio={audio} duration={duration} randomIdFromArtist={randomIdFromArtist} randomIdFromArtist2={randomIdFromArtist2}/>

        <div>
          <p className='song__name'>{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song