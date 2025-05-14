import { memo } from 'react';
import { shallow } from 'zustand/shallow';

const UserCard = memo(({ user }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="font-bold text-xl">{user.firstName} {user.lastName}</h3>
      <p>{user.email}</p>
    </div>
  );
}, shallow);

export default UserCard;
