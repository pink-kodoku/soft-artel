import {ActionType} from "../actions-types/posts";
import {FetchPostsActionType, PostRequest} from "../actions";

interface PostsState {
  loading: boolean;
  error: string | null;
  data: PostRequest;
}

const initialState: PostsState = {
  data: {
    posts: [],
    total: null,
    skip: null,
    limit: null
  },
  loading: false,
  error: null
}


const reducer = (state: PostsState = initialState, action: FetchPostsActionType): PostsState => {
  switch (action.type) {
    case ActionType.FETCH_POSTS:
      return {
        data: {...state.data},
        loading: true,
        error: null
      }

    case ActionType.FETCH_POSTS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null
      }
    case ActionType.FETCH_POSTS_ERROR:
      return {
        data: {...state.data},
        loading: false,
        error: null
      }
    default:
      return state;
  }
}

export default reducer