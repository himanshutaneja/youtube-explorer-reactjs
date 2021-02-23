import axios from 'axios';

const KEY = 'AIzaSyBpeKgXktZOUlOQ3VW85QCWXo34WFVUsCA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
