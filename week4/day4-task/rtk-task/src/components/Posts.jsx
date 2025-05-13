import React, { useState } from 'react';
import {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
} from '../features/api/jsonPlaceholderApi';
import { useDispatch } from 'react-redux';
import { logError } from '../features/errorLog/errorLogSlice';

const Posts = () => {
  const { data, error, isLoading, refetch } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();
  const [deletePost] = useDeletePostMutation();
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAdd = async () => {
    try {
      await addPost({ title, body: 'New Post', userId: 1 }).unwrap();
      setTitle('');
    } catch (err) {
      dispatch(logError('Failed to add post'));
      console.log(err);
    }
  };
  console.log(handleAdd);

  const handleDelete = async (id) => {
    try {
      await deletePost(id).unwrap();
    } catch (err) {
      dispatch(logError('Failed to delete post'));
            console.log(err);

    }
  };

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts</p>;

  return (
    <div className="section">
      <h2>Posts</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New Post Title" />
      <button onClick={handleAdd}>Add Post</button>
      <button onClick={refetch}>Refetch</button>
      <ul>
        {data?.slice(0, 10).map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
