import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Adicione useNavigate
import { MusicCards } from '../../components/MusicCard';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import getMusics from '../../services/musicsAPI';
import { AlbumContainer, ContainerAlbum } from './style';
import { SkeletonAlbum } from './SkeletonAlbum';

const Album = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Crie uma instância do hook useNavigate

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

  const handleBack = () => {
    navigate(-1); // Navega para a página anterior
  };

  return (
    <>
      {exist ? (
        <AlbumContainer data-test='page-album'>
          <button onClick={handleBack}>Voltar</button> {/* Botão para voltar */}
          <h1 data-test="artist-name">{musica[0].artistName}</h1>
          <h2 data-test="album-name">{musica[0].collectionName}</h2>
          {musica.map((song) => (
            <ContainerAlbum key={song.collectionId} data-test={`music-${song.trackId}`}>
              <MusicCards
                trackName={song.trackName}
                previewUrl={song.previewUrl}
                trackId={song.trackId}
                marcados={musicasMarcadas}
                currSong={{ ...song }}
              />
            </ContainerAlbum>
          ))}
        </AlbumContainer>
      ) : <SkeletonAlbum />}
    </>
  );
};

export default Album;
