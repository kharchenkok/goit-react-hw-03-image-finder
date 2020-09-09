
import React, { Component } from 'react';
import Searchbar from './components/searchbar/Searchbar';
import GetFetch from './components/services/GetFetch';
import Spinner from './components/loader/Loader';
import ImageGallery from './components/imageGallery/ImageGallery';
import Button from './components/button/Button';
import ModalImage from './components/modal/Modal';



export default class App extends Component {
  state = {
    images: [],
    userQuery: '',
    page: 1,
    itemsPerPage: 12,
    loading: false,
    largeImageUrl:null
  };
  componentDidUpdate(prevProp, prevState) {
    const { images, userQuery} = this.state;
    if (prevState.userQuery !== userQuery) {
      this.setState({ loading: true });
      this.getImageFetch()
    }
    if (prevState.images.length !== images.length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
 getImageFetch=()=>{
  const {userQuery, page, itemsPerPage } = this.state;
  GetFetch(userQuery, page, itemsPerPage)
  .then(image =>
    this.setState(prevState => ({
      images: [...prevState.images, ...image],
      page: prevState.page + 1,
    })),
  )
  .catch(error => console.log(error))
  .finally(() => this.setState({ loading: false }));
  }


  handleSubmit = query => {
    this.setState({
      images: [],
      userQuery: query,
      page: 1,
    });
  };
  setLargeImage = url => {
    this.setState({ largeImageUrl: url });
  };

  render() {
    const { images, loading, largeImageUrl,itemsPerPage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <Spinner />}
        {images.length>0 && <ImageGallery images={images} setLargeImage={this.setLargeImage}/>}
        {images.length>=itemsPerPage && <Button loadMore={this.getImageFetch} />}
        {largeImageUrl && (
          <ModalImage onClose={() => this.setLargeImage(null)} src={largeImageUrl}/>
        )}
      </>
    );
  }
}
