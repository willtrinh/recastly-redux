import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

var configureStore = createStore(
  rootReducer, {currentVideo: exampleVideoData[0]},
  applyMiddleware(thunk)
);

export default configureStore;

