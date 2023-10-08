import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('post not found');
        }
        return response.json();
      })
      .then((data) => setPost(data))
      .catch((error) => {
        console.error(error.message);
        setPost(null);
      });
  }, [postId]);

  if (post === null) {
    return <h2>post not found</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;