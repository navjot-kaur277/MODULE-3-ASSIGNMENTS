// src/components/UserProfile.jsx
import React from 'react';
import UserInfo from './UserInfo';

const UserProfile = () => {
  // Storing user details
  const userData = {
    name: "Navjot k",
    age: 21
  };

  return (
    <div className="profile-container">
      <h1 className="title">Community Directory</h1>
      {/* Passing props to Child */}
      <UserInfo name={userData.name} age={userData.age} />
    </div>
  );
};

export default UserProfile;