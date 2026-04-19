import React from "react";
import UserCard from "./UserCard";

const Gitprofile = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Gitprofile;