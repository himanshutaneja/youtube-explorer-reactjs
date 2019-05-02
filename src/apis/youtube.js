import axios from 'axios';

const KEY = 'AIzaSyBe0-vws9ucxRXnPskYuktrkg2VLeRH_UE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
