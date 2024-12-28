
"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function Comments() {
  // State for input fields and comments
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState<{ name: string; message: string; id: number }[]>([]);

  // Handle form submission
  const handlePostComment = () => {
    // Validate fields
    if (!name.trim() || !message.trim()) {
      alert("Both fields are required!");
      return;
    }

    // Add new comment to the comments list
    const newComment = { name, message, id: Date.now() };
    setComments([newComment, ...comments]);

    // Clear the input fields
    setName("");
    setMessage("");
  };

  return (
    <div className="w-full max-w-[600px] m-auto mt-[120px] flex flex-col gap-10 px-4 sm:px-0">
      <h1 className="text-3xl font-semibold text-center">Comments</h1>

      {/* Name Input */}
      <Input
        className="w-full h-10 border-2 border-gray-500"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Message Textarea */}
      <Textarea
        placeholder="Type your message here."
        className="w-full h-20 border-2 border-gray-500"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* Post Button */}
      <Button
        className="w-full sm:w-[100px] text-[18px] bg-[#7C4EE4] hover:bg-purple-400 hover:text-black"
        onClick={handlePostComment}
      >
        Post
      </Button>

      {/* Display Comments */}
      <div className="mt-8 border-2 border-gray-300 p-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="border-b border-gray-300 pb-4 mb-4"
            >
              <h3 className="font-bold">{comment.name}:</h3>
              <p>{comment.message}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No comments yet.</p>
        )}
      </div>
    </div>
  );
}

export default Comments;



// import React from 'react';
// import { Input } from '../ui/input';
// import { Textarea } from '../ui/textarea';
// import { Button } from '../ui/button';

// function Comments() {
//   return (
//     <div className="w-full max-w-[600px] m-auto mt-[120px] flex flex-col gap-10 px-4 sm:px-0">
//       <h1 className='text-3xl font-semibold text-center'>Comments</h1>

//       <Input className='w-full h-10 border-2 border-gray-500' />
//       <Textarea placeholder="Type your message here." className='w-full h-20 border-2 border-gray-500' />
//       <Button className="w-full sm:w-[100px] text-[18px] bg-[#7C4EE4] hover:bg-purple-400 hover:text-black">Post</Button>
//     </div>
//   );
// }

// export default Comments;

