import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import API_KEY from '../config.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentVideo: exampleVideoData[0],
      // videoList: exampleVideoData,
      currentVideo: {},
      videoList: []
    };
  }

  componentDidMount() {
    var self = this;
    var options = {
      key: API_KEY,
      max: 5,
      query: 'react'
    };
    this.props.searchYouTube(options, function(data) {
      self.setState({
        currentVideo: data[0],
        videoList: data
      });
    });
  }

  searchVideos(query) {
    var self = this;
    var options = {
      key: API_KEY,
      max: 5,
      query: query
    };
    this.props.searchYouTube(options, function(data) {
      self.setState({
        currentVideo: data[0],
        videoList: data
      });
    });
  }

  videoListEntryClick(video) {
    this.setState({
      currentVideo: video,
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchHandler={this.searchVideos.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList onClickHandler={this.videoListEntryClick.bind(this)} videos={this.state.videoList} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
