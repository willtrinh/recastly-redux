import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return () => ((dispatch) => {
  //TODO:  Write an asynchronous action to handle a video search!
  // call searchYoutube
  // use dispatch to changeVideoList
  // use dispatch to changeVideo
    var options = {
      key: YOUTUBE_API_KEY,
      query: q
    };

    searchYouTube(options, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  }, 200);

};

export default handleVideoSearch;
