import React from 'react';

import './Post.css';

const Post = () => {
  return (
    <div className="post">
      <h4>Add Post</h4>

      <form className="form">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" autoComplete="off" />

        <label htmlFor="body">Content</label>
        <input type="text" name="body" autoComplete="off" />
      </form>
    </div>
  );
};

export default Post;
