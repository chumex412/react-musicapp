import React from 'react';

// Importing fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Header = ({ libraryStatus, setLibraryStatus }) => {

  return (
    <header className="music-header">
      <h1 className="h3">Waves</h1>
      <button className="btn" onClick={ () => setLibraryStatus(!libraryStatus)}>
        Library
        <span>
          <FontAwesomeIcon icon={faMusic} />
        </span>
      </button>
    </header>
  )
}

export default Header;