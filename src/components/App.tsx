import React from 'react';
import PostsList from "./posts-list";
import {Routes, Route} from "react-router-dom";
import Post from "./post";

function App() {
  return (
    <>
      <Routes>
        <Route path="/posts" element={<PostsList/>}/>
        <Route path="/posts/:id" element={<Post/>}/>
      </Routes>
    </>
  );
}

export default App;
