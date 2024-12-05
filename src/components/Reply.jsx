import React from 'react';

const Reply = ({ reply }) => (
    <div
        className="border-l-4 border-green-400 pl-4 mt-2 bg-gray-100 p-2 rounded-md"
        aria-label={`Reply by ${reply.author}`}
    >
        <p className="text-gray-800">
            <strong className="text-green-600">{reply.author}:</strong> {reply.text}
        </p>
    </div>
);

export default Reply;
