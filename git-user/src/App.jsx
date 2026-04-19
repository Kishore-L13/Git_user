import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Gitprofile from "./gitprofile";

function App() {
  const [users, setUsers] = useState([]);

  const searchUsers = async (query) => {
    const res = await fetch(
      `https://api.github.com/search/users?q=${query}`
    );
    const data = await res.json();
    setUsers(data.items);
  };

  return (
    <div>
      <h1>GitHub Finder</h1>
      <Searchbar onSearch={searchUsers}/>
      <Gitprofile users={users}/>
    </div>
  );
}

export default App;