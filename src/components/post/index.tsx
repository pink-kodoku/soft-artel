import './index.scss'
import React, {useEffect} from "react";
import Container from "../container";
import {useActions} from "../../hooks/useActions";
import {useParams} from 'react-router-dom';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Loader from "../loader";

const Post: React.FC = () => {
  const {fetchPost} = useActions()
  let {id} = useParams();
  const {post, loading, error} = useTypedSelector(state => state.fetchPost)

  useEffect(() => {
    fetchPost(Number(id));
  }, [])

  return (
    <Container>
      <div className="post">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-body">{post.body}</div>
        <div className="post-tags">
          {loading && <Loader />}
          {!error && <h3>{error}</h3>}
          {!loading && !error && post.tags.map((tag, index) => <div className="post-tag" key={index}>{tag}</div>)}
        </div>
      </div>
    </Container>
  )
}

export default Post