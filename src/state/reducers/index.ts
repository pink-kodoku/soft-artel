import {combineReducers} from "redux";
import fetchPosts from "./fetchPostsReducer"
import fetchPost from "./fetchPostReducer"

const reducers = combineReducers({
  fetchPosts,
  fetchPost
})

export default reducers;

export type RootState = ReturnType<typeof reducers>;