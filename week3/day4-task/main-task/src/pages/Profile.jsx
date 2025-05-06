import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p>
        User ID: <strong>{id}</strong>
      </p>
    </div>
  );
};

export default Profile;
