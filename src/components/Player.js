import React, { useState } from 'react';

// Import fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward, faRandom, faVolumeUp } from '@fortawesome/free-solid-svg-icons';


const Player = ({ 
  currentSong, 
  audioRef, 
  songInfo, 
  setSongInfo,
  isPlaying, 
  setIsPlaying,
  skipTrackHandler,
  isShuffling,
  setIsShuffling
}) => {

  // State declaration
  const [volumeInfo, setVolumeInfo] = useState({
    value: 10,
    visibility: false
  });

  // Handle play event
  const handlePlay = () => {
    if(isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }

  // Switching between play and pause
  const playIcon = isPlaying ? (
    <FontAwesomeIcon icon={faPause} size="2x" />
  ) : (
    <FontAwesomeIcon icon={faPlay} size="2x" />
  );

  // Song timer function
  const getTime = (timer) => {
    let ss = parseInt(timer % 60);
    let sm = parseInt((timer / 60) % 60);
    return (
      (ss < 10) ? `${sm}:0${ss}` : `${sm}:${ss}`
    );
  }

  // Drag handler
  const dragHandler = (e) => {
    setSongInfo({...songInfo, current: e.target.value});
    audioRef.current.currentTime = e.target.value;
  }

  // Volume event
  const volumeHandler = (e) => {
    const value = e.target.value;
    audioRef.current.volume = value / 10;
    setVolumeInfo({...volumeInfo, value});
  }

  // Declaring style for tracking slider
  const trackStyle = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
    WebkitTransform: `translateX(${songInfo.animationPercentage}%)`,
    MozTransform: `translateX(${songInfo.animationPercentage}%)`
  }

  const trackBackground = {
    background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
  }

  // Condition for turning on shuffling 
  const activeShuffle = isShuffling ? "active-shuffle" : '';

  // Hiding volume 
  const displayVolume = volumeInfo.visibility ? "show" : '';

  // Highlight volume
  const lightVolume = volumeInfo.visibility ? "primary-color" : '';

  return (
    <div className="player">
      <div className="time-control">
        <p className="parag">{ getTime(songInfo.current) }</p>
        <div className="track" style={trackBackground}>
          <input
            type="range" 
            name={currentSong.id} 
            id="seekBar"
            onChange={dragHandler}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.current} 
          />
          <div className="animate-track" style={trackStyle}></div>
        </div>
        <p className="parag">{ songInfo.duration ? getTime(songInfo.duration) : "0:00" }</p>
      </div>

      <div className="player-control">
        <button className={ `btn ${lightVolume}` } onClick={ () => setVolumeInfo( {...volumeInfo, visibility: !volumeInfo.visibility}) }>
          <FontAwesomeIcon icon={faVolumeUp} />
        </button>
        <button className="btn" onClick={() => skipTrackHandler("skip-backward")}>
          <FontAwesomeIcon icon={faStepBackward} />
        </button>
        <button className="btn" onClick={handlePlay}>{playIcon}</button>
        <button className="btn" onClick={() => skipTrackHandler("skip-forward")}>
          <FontAwesomeIcon icon={faStepForward} />
        </button>
        <button className={`btn ${activeShuffle}`} onClick={() => setIsShuffling(!isShuffling)}>
          <FontAwesomeIcon icon={faRandom} />  
        </button>      
      </div>
      <div className={ `volume-wrapper ${displayVolume}` }>
        <input 
          type="range" 
          id="volume" 
          value={volumeInfo.value}
          min="0" 
          max="10" 
          step="0.01" 
          onChange={volumeHandler} 
        />
      </div>
    </div>
  )
}

export default Player