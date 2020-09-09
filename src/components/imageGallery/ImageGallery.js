import React from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';


export default function ImageGallery({ images, setLargeImage }) {

  return (
    <>
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem
            key={uuidv4()}
            image={image}
            setLargeImage={setLargeImage}
          />
        ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ).isRequired,
  setLargeImage: PropTypes.func.isRequired,
};
