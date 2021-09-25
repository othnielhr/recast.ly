import YOUTUBE_API_KEY from '../config/config.js';
import API_KEY from '../config.js';
var searchYouTube = (options, callback) => {
  // TODO
  server: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';

  $.ajax({
    type: 'GET',
    url: searchYouTube.server,
    dataType: 'json',
    data: {
      key: options.key || API_KEY,
      q: options.query || 'react',
      maxResults: options.max || 5,
      part: 'snippet'
    },
    success: function(data) {
      console.log(data);
      callback(data);
    },
    // error: function(error) {
    //   console.error('failed to fetch data', error);
    // }
  });
};

export default searchYouTube;
