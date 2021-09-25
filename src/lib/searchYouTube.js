import YOUTUBE_API_KEY from '../config/config.js';
import API_KEY from '../config.js';
var searchYouTube = (options, callback) => {
  // TODO

  $.ajax({
    type: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    headers: {
      'Authorization': API_KEY
    },
    dataType: 'json',
    data: {
      /* youtube_api_key */youtubeApiKey: YOUTUBE_API_KEY,
      key: options.key,
      q: options.query,
      maxResults: options.max,
    },
    success: function(data) {
      // console.log(data);
      // callback(data);
      callback(data.splice(0, options.max));
    },
    error: function(error) {
      console.error('failed to fetch data', error);
    }
  });
};

export default searchYouTube;
