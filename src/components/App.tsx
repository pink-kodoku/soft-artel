import React from 'react';
import PostsList from "./posts-list";
import {Routes, Route, Navigate} from "react-router-dom";
import Post from "./post";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/posts"/>}/>
        <Route path="/posts" element={<PostsList/>}/>
        <Route path="/posts/:id" element={<Post/>}/>
      </Routes>
    </>
  );
}

export default App;
