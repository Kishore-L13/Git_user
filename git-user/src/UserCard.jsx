import React from "react";

const UserCard = ({ user }) => {
  return (
  <div className="card">
  <img className="avatar" src={user.avatar_url} alt="" />
  <h3 className="username">{user.login}</h3>
  <a
    className="profile-btn"
    href={user.html_url}
    target="_blank"
    rel="noreferrer"
  >
    View Profile
  </a>
</div>
  );
};

export default UserCard;