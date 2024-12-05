// src/App.js
import React, { useState } from 'react';
import Post from './components/Post';

function App() {
  const [post, setPost] = useState({
    title: 'My First Post',
    body: 'This is the body of the post.',
    comments: [
      {
        id: 1,
        author: 'User1',
        text: 'Great post!',
        replies: [
          { id: 1, author: 'User2', text: 'I agree!' },
          { id: 2, author: 'User3', text: 'Thanks for sharing!' },
        ],
      },
      {
        id: 2,
        author: 'User4',
        text: 'Interesting thoughts.',
        replies: [],
      },
    ],
  });

  const handleReply = (commentId, replyText) => {
    const newReply = {
      id: Date.now(),
      author: 'CurrentUser', // Mock user (replace as needed)
      text: replyText,
    };

    setPost((prevPost) => ({
      ...prevPost,
      comments: prevPost.comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, newReply] }
          : comment
      ),
    }));
  };

  const handleAddComment = (commentText) => {
    const newComment = {
      id: Date.now(),
      author: 'CurrentUser', // Mock user (replace as needed)
      text: commentText,
      replies: [],
    };

    setPost((prevPost) => ({
      ...prevPost,
      comments: [...prevPost.comments, newComment],
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Post post={post} onReply={handleReply} onAddComment={handleAddComment} />
      </div>
    </div>
  );
}

export default App;
