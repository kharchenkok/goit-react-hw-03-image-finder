import React, { Component } from "react";
import PropTypes from 'prop-types';


export default class SearchForm extends Component{
  state = {
    inputValue:''
  }
 
  handleInput=event=>{
    this.setState({inputValue:event.target.value})
  }

  handleSubmit=event=>{
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue)
    this.setState({inputValue:''})
  }
  render(){
  return (
  <form className="SearchForm" onSubmit={this.handleSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      onChange={this.handleInput}
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
  );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,

};