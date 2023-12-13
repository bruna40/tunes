import { useState, useEffect } from 'react';
import axios from 'axios';
import { ContainerSearch, ContainerForm, ResultsMusic } from './style';

const Search = () => {
  const [name, setName] = useState('');
  const [nameSave, setNameSave] = useState('');
  const [listMusic, setListMusic] = useState([]);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [musica, setMusica] = useState(false);

  const HandleChange = (event) => {
    setName(event.target.value);
    setNameSave(event.target.value);
  };

  const validaNome = (event) => {
    event.preventDefault();

    const artistNameURL = encodeURI(name).replaceAll('%20', '+');
    axios
      .get(`https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`)
      .then((response) => {
        const albuns = response.data.results.map(
          ({
            artistId,
            artistName,
            collectionId,
            collectionName,
            collectionPrice,
            artworkUrl100,
            releaseDate,
            trackCount,
          }) => ({
            artistId,
            artistName,
            collectionId,
            collectionName,
            collectionPrice,
            artworkUrl100,
            releaseDate,
            trackCount,
          }),
        );
        setListMusic(albuns);
        setMusica(true);
        setName('');
      }).catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const min = 2;
    if (name.length >= min) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name]);

  return (
    <>
      {
        <ContainerSearch>
          <ContainerForm data-testid="page-search">
            <input
              type="text"
              data-testid="search-artist-input"
              value={ name }
              onChange={ HandleChange }
              placeholder='Digite o nome do artista ou musica'
            />
            <button
              type="submit"
              data-testid="search-artist-button"
              onClick={ validaNome }
              disabled={ isButtonDisabled }
            >
              Procurar
            </button>
          </ContainerForm>
          {musica && (
            <ResultsMusic>
              <p>
                { `Resultado de álbuns de: ${nameSave}`}
              </p>
              <span>
                {listMusic.map((song) => (
                  <div key={ song.collectionId }>
                    <a
                      href={ `/album/${song.collectionId}` }
                      data-testid={ `link-to-album-${song.collectionId}` }
                    >
                      <img
                        src={ song.artworkUrl100 }
                        alt={ song.collectionName }
                      />
                      <p>
                        {song.artistName}
                      </p>
                      <p>
                        {song.collectionName}
                      </p>

                    </a>
                  </div>
                ))}
              </span>
              {listMusic.length === 0 && <p>Nenhum álbum foi encontrado</p>}
            </ResultsMusic>
          )}
        </ContainerSearch>
      }
    </>
  );
};

export default Search;
