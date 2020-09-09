import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGalleryItem ({ image, setLargeImage }){

    const{webformatURL, largeImageURL} = image
    return (
      <li className='ImageGalleryItem'>
        <img
          src={webformatURL}
          alt="super-gallery"
          className='ImageGalleryItem__image'
          onClick={() => setLargeImage(largeImageURL)}
        />
      </li>
    );
  };
  

  ImageGalleryItem.propTypes = {
    image: PropTypes.object.isRequired,
    setLargeImage: PropTypes.func.isRequired,
  };
