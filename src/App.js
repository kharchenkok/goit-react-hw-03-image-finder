
// import { v4 as uuidv4 } from 'uuid';
// id: uuidv4() 

import React, { Component } from 'react';
import axios from "axios";
// import Search from '../search/Search';
// import { NewsList } from '../newsList/NewsList';

axios.defaults.baseURL = "https://pixabay.com/api"

export default class App extends Component {
  state = {
    images: [],
    query: 'cat',
    loading: false,
    showModal: false,
    page:1
  };
  getFetch = (query,page) => {
    try {
      const images = axios.get(
        // `/everything?q=${query}&from=2020-08-08&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
        `/?key=${process.env.REACT_APP_API_KEY}&q=${query}&page=${page}&per_page=12&image_type=photo`
      ).then(response=> response.data.hits)
    } catch (error) {
      console.log(error);
    }
  };
  getImages = ()=>{
    const{query, page} = this.state
    this.setState({ loading: true });
    this.getFetch(query, page)
    .then((images) =>
      this.setState((prevState) => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }))
    )
    .catch((error) => this.setState({ error }))
    .finally(() => this.setState({ loading: false }));
};

  
  
  // componentDidMount() {
  //   this.getNews();
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.query !== this.state.query) {
  //     this.getNews(this.state.query);
  //   }
  // }

  // getQuery = (query) => {
  //   this.setState({ query });
  // };

  render() {
    // const { news } = this.state;
    return (
      <>
        {/* <Search getQuery={this.getQuery} /> */}
        {/* <NewsList data={news} /> */}
      </>
    );
  }
}