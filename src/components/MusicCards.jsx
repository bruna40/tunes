import { useState, useEffect } from 'react';
import { addSong, removeSong } from '../services/favoriteSongsAPI.js';
import Carregando from './Carregando.jsx';

export function MusicCards(props) {
  const { trackName, previewUrl, trackId, currSong } = props;
  const [carregou, setCarregou] = useState(false);
  const [favSongs, setFavSongs] = useState([]);

  const loadFavoritedSongs = () => {
    setFavSongs(JSON.parse(localStorage.getItem('favorite_songs')));
  };

  const handleCheck = async ({ target: { checked } }) => {
    setCarregou(true);
    if (checked) {
      await addSong(currSong);
    } else {
      await removeSong(currSong);
    }
    setFavSongs(JSON.parse(localStorage.getItem('favorite_songs')));
    setCarregou(false);
  };

  useEffect(() => {
    loadFavoritedSongs();
  }, []);
  return (
    <div>
      {trackName && (
        <>
          <h3>{trackName}</h3>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            <code>audio</code>
          </audio>
          {carregou ? (
            <Carregando />
          ) : (
            <input
              type="checkbox"
              data-testid={ `checkbox-music-${trackId}` }
              checked={ favSongs.some((item) => item.trackId === trackId) }
              onChange={ handleCheck }
            />
          )}
        </>
      )}
    </div>
  );
}

