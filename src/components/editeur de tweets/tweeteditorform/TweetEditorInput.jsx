import React, { useState } from "react";

const TweetEditorInput = ({ message }) => {
  const [value, setValue] = useState("");

  return (
    <div >
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        maxLength={280}
        className="tweet-editor-input"
      />
      <p>
        {message}
      </p>
    </div>
  );
};

export default TweetEditorInput;
