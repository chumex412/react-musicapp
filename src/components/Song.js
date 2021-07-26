import React from 'react';


const Song = ({ currentSong }) => {


  return (
    <section className="song-header">
      <img src={currentSong.cover} alt={currentSong.name} />
      <h2 className="h3">{currentSong.name}</h2>
      <h3 className="h4">{currentSong.artist}</h3>
    </section>
  )
}

export default Song