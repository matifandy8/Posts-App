import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {postListReducer, postCreateReducer, postDeleteReducer, postDetailReducer} from './reducers/postReducers'




const reducer = combineReducers({ 
    postList: postListReducer,
    postCreated: postCreateReducer,
    postDeleted: postDeleteReducer,
    postDetail: postDetailReducer,

})


const middleware = [thunk]

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store;