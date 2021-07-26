import React from 'react';


const LibrarySong = ({ song, songSelectHandler, activeSong }) => {

  // Select song from library and do something
  const selectedLibrarySong = (id) => {
    songSelectHandler(id);
    activeSong(id);
  }

  const active = song.active ? "selected" : '';

  return (
    <li className={`song-item ${active}`} onClick={() => selectedLibrarySong(song.id)}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h4 className="parag">{song.name}</h4>
        <h5 className="h5">{song.artist}</h5>
      </div>
    </li>
  )
};

export default LibrarySong;