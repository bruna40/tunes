import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import{ MusicCards }from '../../components/MusicCard';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import getMusics from '../../services/musicsAPI';
import { AlbumContainer } from './style';

const Album = () => {
  const { id } = useParams();

  const [musica, setMusica] = useState([]);
  const [musicasMarcadas, setMusicasMarcadas] = useState([]);
  const [exist, setExist] = useState(false);

  const pegarMusicas = async () => {
    setMusicasMarcadas(await getFavoriteSongs());
    const music = await getMusics(id);
    setMusica(music);
    setExist(true);
  };

  useEffect(() => {
    setMusica([]);
    pegarMusicas();
  }, [id]);

  return (
    <>
      {exist && (
        <AlbumContainer>
            <h1 data-testid="artist-name">{musica[0]?.artistName}</h1>
            <h2 data-testid="album-name">{musica[0]?.collectionName}</h2>
            {musica.map((song) => (
              <MusicCards
                key={ song.collectionId }
                trackName={ song.trackName }
                previewUrl={ song.previewUrl }
                trackId={ song.trackId }
                marcados={ musicasMarcadas }
                currSong={ { ...song } }
              />
            ))}
        </AlbumContainer>
      )}
    </>
  );
};

export default Album;
