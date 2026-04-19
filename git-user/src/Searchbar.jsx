import React, { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search GitHub user..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;