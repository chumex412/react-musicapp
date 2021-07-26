import React from 'react';

//import { utils } from './utils';

// Import component
import LibrarySong from './LibarySong';


const Library = ({ 
  songs, 
  setCurrentSong, 
  setSongs, 
  audioRef, 
  isPlaying,
  libraryStatus
}) => {

  // Highlight the active song 
  const activeSong = (id) => {
    const active = songs.map(song => {
      if(song.id === id) {
        return {...song, active: true}
      } else {
        return {...song, active: false}
      }
    });

    setSongs(active)
  }

  const songSelectHandler = async (id) => {
    const selected = songs.filter(song => (
      song.id === id
    ));

    await setCurrentSong(...selected);
    if (isPlaying) audioRef.current.play();
  }


  const songList = songs.map(song => (
    <LibrarySong 
      id={song.id}
      key={song.id}
      song={song}
      songSelectHandler={songSelectHandler}
      activeSong={activeSong}
    />
  ))

  const showLibrary = libraryStatus ? 'active-library' : '';

  return (
    <nav className={`library ${showLibrary}`}>
      <h2 className="h4">Library</h2>
      <ul className="song-list">{songList}</ul>
    </nav>
  );
}

export default Library;