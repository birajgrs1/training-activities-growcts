import React from 'react';
import { useGetUsersQuery } from '../features/api/jsonPlaceholderApi';

const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div className="section">
      <h2>Users</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
