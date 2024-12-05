import React, { useState } from 'react';
import Comment from './Comment';

const Post = ({ post, onReply, onAddComment }) => {
    const [commentText, setCommentText] = useState('');

    const handleAddComment = (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            onAddComment(commentText);
            setCommentText('');
        }
    };

    return (
        <article className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <header>
                <h1 className="text-2xl font-bold mb-4 text-blue-700">{post.title}</h1>
            </header>
            <main>
                <p className="text-gray-700 text-lg mb-6">{post.body}</p>
            </main>
            <section aria-labelledby="add-comment-form">
                <h2 id="add-comment-form" className="text-xl font-semibold text-gray-800 mb-3">
                    Add a Comment
                </h2>
                <form onSubmit={handleAddComment} className="mb-6">
                    <label htmlFor="comment-input" className="sr-only">
                        Write your comment
                    </label>
                    <textarea
                        id="comment-input"
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        aria-required="true"
                    ></textarea>
                    <button
                        type="submit"
                        className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
                        aria-label="Post your comment"
                    >
                        Post Comment
                    </button>
                </form>
            </section>
            <section aria-labelledby="comments-section">
                <h2 id="comments-section" className="text-xl font-semibold text-gray-800 mb-4">
                    Comments
                </h2>
                {post.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} onReply={onReply} />
                ))}
            </section>
        </article>
    );
};

export default Post;
