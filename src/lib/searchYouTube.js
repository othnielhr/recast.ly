var searchYouTube = (options, callback) => {
  // TODO

  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      q: options
    },
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('failed to fetch data', error);
    }
  });
};

export default searchYouTube;
