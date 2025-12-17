// src/components/UserInfo.jsx
import React from 'react';

const UserInfo = ({ name, age }) => {
  return (
    <div className="user-card">
      <div className="avatar">
        {name.charAt(0).toUpperCase()}
      </div>
      <h2>{name}</h2>
      <p>Age: <span>{age}</span></p>
      <div className="badge">Verified Profile</div>
    </div>
  );
};

export default UserInfo;