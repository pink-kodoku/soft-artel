import {ActionType} from "../actions-types/posts";

export interface Post {
  id: number | null;
  title: string | null;
  body: string | null;
  userId: number | null;
  tags: string[];
  reactions: number | null;
}

interface FetchPostAction {
  type: ActionType.FETCH_POST,
}

interface FetchPostSuccessAction {
  type: ActionType.FETCH_POST_SUCCESS,
  payload: Post
}

interface FetchPostErrorAction {
  type: ActionType.FETCH_POST_ERROR,
  payload: string;
}

export type FetchPostActionType =
  | FetchPostAction
  | FetchPostSuccessAction
  | FetchPostErrorAction;

