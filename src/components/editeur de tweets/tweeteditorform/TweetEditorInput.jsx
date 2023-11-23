import React from "react";

const TweetEditorInput = () => {

  return (
      <input
        type="text"
        maxLength={280}
        className="tweet-editor-input"
        placeholder="What's happening?"
      />
  );
};

export default TweetEditorInput;
