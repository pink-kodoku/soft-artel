import {ActionType} from "../actions-types/posts";
import {Post} from "./fetch-post";

export interface PostRequest {
  posts: Post[]
  total: number | null,
  skip: number | null,
  limit: number | null
}

interface FetchPostsAction {
  type: ActionType.FETCH_POSTS
}

interface FetchPostsSuccessAction {
  type: ActionType.FETCH_POSTS_SUCCESS,
  payload: PostRequest
}

interface FetchPostsErrorAction {
  type: ActionType.FETCH_POSTS_ERROR,
  payload: string;
}

export type FetchPostsActionType =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction