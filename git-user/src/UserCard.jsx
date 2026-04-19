import React from "react";

const UserCard = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} width="100" alt="" />
      <h3>{user.login}</h3>
      <a href={user.html_url} target="_blank">View Profile</a>
    </div>
  );
};

export default UserCard;