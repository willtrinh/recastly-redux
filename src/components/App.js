import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import store from '../store/store.js';

import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  //   this.state = {
  //     videos: [],
  //     currentVideo: null
  //   };

  //   this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  // }

  // componentDidMount() {
  //   this.getYouTubeVideos('react tutorials');
  // }

  // handleVideoListEntryTitleClick(video) {
  //   this.setState({currentVideo: video});
  // }

  // getYouTubeVideos(query) {
  //   var options = {
  //     key: this.props.API_KEY,
  //     query: query
  //   };

  //   this.props.searchYouTube(options, (videos) =>
  //     this.setState({
  //       videos: videos,
  //       currentVideo: videos[0]
  //     })
  //   );
  // }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}

// render() {
//   return (
//     <div>
//       <nav className="navbar">
//         <div className="col-md-6 col-md-offset-3">
//           <SearchContainer getYouTubeVideos={this.getYouTubeVideos}/>
//         </div>
//       </nav>
//       <div className="row">
//         <div className="col-md-7">
//           <VideoPlayerContainer video={this.state.currentVideo}/>
//         </div>
//         <div className="col-md-5">
//           <VideoList
//             handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
//             videos={this.state.videos}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;


