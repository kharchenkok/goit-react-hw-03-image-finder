import React from 'react';
import PropTypes from 'prop-types';

export default function Button ({ loadMore }){
    return (
      <button className='Button Button_loadmore' type="button" onClick={loadMore}>
        Load more
      </button>
    );
  };
  
  Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
  };