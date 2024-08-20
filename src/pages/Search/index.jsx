import { useState, useEffect } from 'react';
import { ContainerSearch, ResultsMusic } from './style';
import { SkeletonMusic } from './SkeletonMusics.jsx';
import GenreSection from '../../components/GenreSection';
import getAlbumsByGenre from '../../services/getAlbumByGenre.js'; // Função para buscar álbuns por gênero

const genresList = ['Pop', 'Rock', 'Jazz', 'Hip-Hop', 'Classical']; // Lista de gêneros para busca

const Search = () => {
  const [genres, setGenres] = useState({}); // Estado para armazenar músicas por gênero
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros, se houver

  // Função para buscar álbuns por gênero
  const fetchAlbumsByGenres = async () => {
    const genreData = {};
    try {
      for (const genre of genresList) {
        const albums = await getAlbumsByGenre(genre);
        genreData[genre] = Array.isArray(albums) ? albums : [];
      }
      setGenres(genreData);
    } catch (error) {
      setError(`Erro ao buscar álbuns: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbumsByGenres();
  }, []);

  return (
    <ContainerSearch>
      <ResultsMusic>
        {loading ? (
          <SkeletonMusic />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            {Object.keys(genres).length > 0 ? (
              Object.keys(genres).map((genre) => (
                <GenreSection
                  key={genre}
                  title={genre} // Passa o nome do gênero como title
                  musicData={genres[genre]} // Passa apenas musicData
                />
              ))
            ) : (
              <p>Nenhum álbum encontrado para os gêneros selecionados.</p>
            )}
          </>
        )}
      </ResultsMusic>
    </ContainerSearch>
  );
};

export default Search;