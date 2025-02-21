import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import SongList from '../components/SongList'
import {artistArray} from "../assets/database/artists"
import {songsArray} from "../assets/database/songs"

const Artist = () => {
  const {id} = useParams()
  const artistList = artistArray.filter((currentObj) => currentObj._id === id)[0]
  const songsListFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === artistList.name)
  const randomId = Math.floor(Math.random() * (songsListFromArtist.length - 1))
  const randomIdFromMusicList = songsListFromArtist[randomId]._id

  return (
    <div className='artist'>

      <div className="artist__header" style={{backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistList.banner})`}}> 
      <h2 className='artist__title'>{artistList.name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songList={songsListFromArtist}/>
      </div>

      <Link to={`/song/${randomIdFromMusicList}`}>
      <FontAwesomeIcon
              className="single-item__icon single-item__icon--artist"
              icon={faCirclePlay}
            />
      </Link>
    </div>
  )
}

export default Artist