import axios from 'axios';

const getAlbumsByGenre = async (genre) => {
  try {
    const response = await axios.get(`https://itunes.apple.com/search?entity=album&term=${encodeURIComponent(genre)}`);
    const albums = response.data.results.map(
      ({
        artistId,
        artistName,
        collectionId,
        collectionName,
        collectionPrice,
        artworkUrl100,
        releaseDate,
        trackCount,
        primaryGenreName,
      }) => ({
        artistId,
        artistName,
        collectionId,
        collectionName,
        collectionPrice,
        artworkUrl100,
        releaseDate,
        trackCount,
        primaryGenreName,
      })
    );

    return albums;
  } catch (error) {
    console.error('Error fetching albums by genre:', error);
    return [];
  }
};

export default getAlbumsByGenre;