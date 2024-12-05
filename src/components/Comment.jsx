import React, { useState } from 'react';
import Reply from './Reply';

const Comment = ({ comment, onReply }) => {
    const [showReplies, setShowReplies] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [isReplying, setIsReplying] = useState(false);

    const handleReplySubmit = (e) => {
        e.preventDefault();
        if (replyText.trim()) {
            onReply(comment.id, replyText);
            setReplyText('');
            setIsReplying(false);
        }
    };

    return (
        <article className="border-l-4 border-blue-400 pl-4 mt-4 bg-gray-50 p-3 rounded-md">
            <p className="text-gray-800">
                <strong className="text-blue-600">{comment.author}:</strong> {comment.text}
            </p>
            <div className="mt-2 flex items-center space-x-2">
                <button
                    className="text-blue-600 hover:underline text-sm"
                    onClick={() => setShowReplies(!showReplies)}
                    aria-expanded={showReplies}
                    aria-controls={`replies-${comment.id}`}
                >
                    {showReplies ? 'Hide Replies' : 'Show Replies'}
                </button>
                <button
                    className="text-blue-600 hover:underline text-sm"
                    onClick={() => setIsReplying(!isReplying)}
                    aria-label={isReplying ? 'Cancel reply' : 'Reply to comment'}
                >
                    {isReplying ? 'Cancel' : 'Reply'}
                </button>
            </div>

            {isReplying && (
                <form
                    onSubmit={handleReplySubmit}
                    className="mt-2"
                    aria-labelledby={`reply-form-${comment.id}`}
                >
                    <label htmlFor={`reply-input-${comment.id}`} className="sr-only">
                        Write your reply
                    </label>
                    <input
                        id={`reply-input-${comment.id}`}
                        type="text"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write your reply..."
                        className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:ring-blue-200"
                        aria-required="true"
                    />
                    <button
                        type="submit"
                        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md shadow-md transition"
                        aria-label="Submit your reply"
                    >
                        Submit
                    </button>
                </form>
            )}

            <section
                id={`replies-${comment.id}`}
                className={`mt-4 ${showReplies ? '' : 'hidden'}`}
                aria-label={`Replies to ${comment.author}'s comment`}
            >
                {comment.replies.map((reply) => (
                    <Reply key={reply.id} reply={reply} />
                ))}
            </section>
        </article>
    );
};

export default Comment;
