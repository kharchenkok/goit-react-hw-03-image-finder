import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api"


export default function GetFetch(query, page=1, itemsPerPage=12){
    try {
       return axios.get(
        // `/everything?q=${query}&from=2020-08-08&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
        `/?key=${process.env.REACT_APP_API_KEY}&q=${query}&page=${page}&per_page=${itemsPerPage}&image_type=photo`
      )
      .then(resp=>resp.data.hits.map(({id,webformatURL,largeImageURL})=>({id,webformatURL,largeImageURL}))
      )
    } catch (error) {
      console.log(error);
    }
  };