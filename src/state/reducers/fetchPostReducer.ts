import {ActionType} from "../actions-types/posts";
import {FetchPostActionType, Post} from "../actions";

interface PostsState {
  post: Post;
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  post: {
    id: null,
    title: null,
    body: null,
    userId: null,
    tags: [],
    reactions: null,
  },
  loading: false,
  error: null
}


const reducer = (state: PostsState = initialState, action: FetchPostActionType): PostsState => {
  switch (action.type) {
    case ActionType.FETCH_POST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case ActionType.FETCH_POST_SUCCESS:
      return {
        post: action.payload,
        loading: false,
        error: null
      }
    case ActionType.FETCH_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: null
      }
    default:
      return state;
  }
}

export default reducer