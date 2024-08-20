import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import GenreSection from './GenreSection/index.jsx';

const MusicSlider = ({ genres }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {Object.keys(genres).map((genre) => (
        <SwiperSlide key={genre}>
          <GenreSection
            musicData={genres[genre]} // Passe apenas os dados da música
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

MusicSlider.propTypes = {
  genres: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        collectionId: PropTypes.string.isRequired,
        artistName: PropTypes.string.isRequired,
        collectionName: PropTypes.string.isRequired,
        artworkUrl100: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
};

export default MusicSlider;