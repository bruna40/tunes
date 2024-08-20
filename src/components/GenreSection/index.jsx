import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MusicSectionContainer } from './style'; // Certifique-se de definir o estilo apropriado

const GenreSection = ({ title, musicData }) => {
  return (
    <MusicSectionContainer>
      <h2>{title}</h2> {/* Exibe o nome do gênero */}
      <div className="music-list">
        {musicData.length > 0 ? (
          musicData.map((song) => (
            <div key={song.collectionId} className="music-card">
              <Link to={`/album/${song.collectionId}`}>
                <img
                  src={song.artworkUrl100}
                  alt={song.collectionName}
                  width="100" // Ajuste o tamanho da imagem conforme necessário
                  height="100" // Ajuste o tamanho da imagem conforme necessário
                />
              </Link>
            </div>
          ))
        ) : (
          <p>Nenhuma música encontrada</p>
        )}
      </div>
    </MusicSectionContainer>
  );
};

GenreSection.propTypes = {
  title: PropTypes.string.isRequired, // Adiciona propType para o título
  musicData: PropTypes.arrayOf(
    PropTypes.shape({
      collectionId: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired,
      collectionName: PropTypes.string.isRequired,
      artworkUrl100: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GenreSection;

