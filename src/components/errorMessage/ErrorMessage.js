import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorMessage ({message}){
    return (
      <div>
        {`on request "${message}" nothing was found`}
      </div>
    );
  };
  
  ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
  };