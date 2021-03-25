import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = q => {
  return dispatch => {
  //TODO:  Write an asynchronous action to handle a video search!
  // call searchYoutube
  // use dispatch to changeVideoList
  // use dispatch to changeVideo
    return searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, videos => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });
  };

};

export default handleVideoSearch;
