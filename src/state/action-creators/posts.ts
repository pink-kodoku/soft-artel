import axios from "axios"
import {Dispatch} from "redux";
import {ActionType} from "../actions-types/posts";
import {Action} from "redux";

export const fetchPosts = (skip: number, limit: number, term?: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_POSTS
    })

    try {
      let content: any;
      if (term == null) {
        const {data} = await axios.get("https://dummyjson.com/posts", {
          params: {
            skip,
            limit
          }
        })
        content = data;
      } else {
        const {data} = await axios.get("https://dummyjson.com/posts/search", {
          params: {
            q: term,
            skip,
            limit
          }
        })
        content = data;
      }


      dispatch({
        type: ActionType.FETCH_POSTS_SUCCESS,
        payload: content
      })
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_POSTS_ERROR,
        payload: error.message
      })
    }
  }
}

export const fetchPost = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_POST
    })

    try {
      const {data} = await axios.get(`https://dummyjson.com/posts/${id}`)

      dispatch({
        type: ActionType.FETCH_POST_SUCCESS,
        payload: data
      })


    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_POST_ERROR,
        payload: error.message
      })
    }
  }
}