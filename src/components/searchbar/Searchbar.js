import React from "react";
import PropTypes from 'prop-types';

import SearchForm from "./SearchForm"

export default function Searchbar ({onSubmit}){
  
  return (
    <header className="Searchbar">
  < SearchForm onSubmit={onSubmit} />
</header>
  );
  
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,

};