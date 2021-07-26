import React, { useState, useRef } from 'react';

// Import styles
import './styles/app.scss';

// Import components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Header from './components/Header';

// Importing data 
import data from "./components/data";

function App() {

  // Declaring states
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
    animationPercentage: 0
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  // Declaring ref
  const audioRef = useRef(null);

  // Handling time update
  const timeUpdateHandler = (e) => {
    let duration = e.target.duration;
    let currentTime = e.target.currentTime;
    let roundedCurrent = Math.round(songInfo.current);
    let roundedDuration = Math.round(songInfo.duration);

    const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100); 

    setSongInfo({...songInfo, current: currentTime, duration, animationPercentage});
  }

  // Function for random index
  const setRandomIndex = (index) => {
    return Math.floor(Math.random() * index);
  }

  // Handle skip event
  const skipTrackHandler = async (direction) => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);

    // Skip forward 
    if(direction === 'skip-forward') {

      if(isShuffling) {
        const randomIndex = setRandomIndex(songs.length)
        await setCurrentSong(songs[randomIndex]);
        activeLibraryHandler(songs[randomIndex]);

        if(isPlaying) audioRef.current.play();

      } else {
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
        if (isPlaying) audioRef.current.play();
      }
    } 

    // Skip backwards
    if (direction === 'skip-backward') {
      
      if((currentIndex - 1) < 0) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[currentIndex - 1]);
      activeLibraryHandler(songs[currentIndex - 1]);
      if (isPlaying) audioRef.current.play();
    }
  }

  // Handle song ended event
  const songEndHandler = async () => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    // Skip to random song or forward 
    if(isShuffling) {
      const randomIndex = setRandomIndex(songs.length)
      await setCurrentSong(songs[randomIndex]);
      activeLibraryHandler(songs[randomIndex]);
      if(isPlaying) audioRef.current.play();
    } else {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
      if (isPlaying) audioRef.current.play();
    }
  }

  const activeLibraryHandler = (nextPrev) => {
    const active = songs.map(song => {
      if(song.id === nextPrev.id) {
        return {...song, active: true}
      } else {
        return {...song, active: false}
      }
    });
    setSongs(active);
  }

  // Add library-active class to music container on truthy libraryStatus
  const activeLibrary = libraryStatus ? "library-active" : '';

  return (
    <div className={ `music-container ${activeLibrary}` }>
      <Header libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Library
        songs={songs} 
        setCurrentSong={setCurrentSong} 
        setSongs={setSongs}
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
      />

      <Song currentSong={currentSong} />

      <Player
        currentSong={currentSong} 
        audioRef={audioRef} 
        songInfo={songInfo} 
        setSongInfo={setSongInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipTrackHandler={skipTrackHandler}
        isShuffling={isShuffling}
        setIsShuffling={setIsShuffling}
      />
      <audio
        src={currentSong.audio}
        ref={audioRef} 
        title={currentSong.name} 
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
        className="audio-element" 
      />
    </div>
  );
}

export default App;
