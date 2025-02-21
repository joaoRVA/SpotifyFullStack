import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faCirclePlay, faForwardStep, faCirclePause } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useRef } from 'react'


const Player = ({audio, duration, randomIdFromArtist, randomIdFromArtist2}) => {
    // useRef é um hook que serve para mapear um elemento específico colocando a ref nele
    const audioPlayer = useRef()
    const progressBar = useRef()
    // console.log(audioPlayer.current)
    const [isPlaying, setIsPlaying] = useState(false)
    
    const timeinSeconds = (timeString) =>{
        const splitArray = timeString.split(":")
        const minutes = Number(splitArray[0])
        const seconds = Number(splitArray[1])

        return seconds + minutes * 60
    }

    const timeConvert = (timeInSeconds)=>{
        const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0")
        const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, "0")
        
        return `${minutes}:${seconds}`
    }
    const [currentTime, setCurrentTime] = useState(timeConvert(0))


    const checkPlay = () =>{
        isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
        setIsPlaying(!isPlaying)

        
    }
    // console.log(audioPlayer.current.currentTime)
    // console.log(timeinSeconds(duration))

    useEffect(() => {
        const idInterval = setInterval(() => {
            if (isPlaying) 
                setCurrentTime(timeConvert(audioPlayer.current.currentTime))
                progressBar.current.style.setProperty("--_progress", (audioPlayer.current.currentTime / timeinSeconds(duration)) * 100 + "%")
        }, 1000);
    
      return () => clearInterval(idInterval)
    }, [isPlaying])
    
  return (
    <div className="player">
        <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
            <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon className="player__icon player__icon--play" icon={isPlaying ? faCirclePause : faCirclePlay} onClick={() => checkPlay()}/>

        <Link to={`/song/${randomIdFromArtist2}`}>
            <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>

        </div>
        <div className="player__progress">
            <p>{currentTime}</p>
            <div className="player__bar">
                <div ref={progressBar} className="player__bar-progress"></div>
            </div>
            <p>{duration}</p>
        </div>

        <audio ref={audioPlayer} src={audio}></audio>
    </div>
)
}

export default Player