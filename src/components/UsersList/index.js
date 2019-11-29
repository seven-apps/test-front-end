import React from 'react';
import PropTypes from 'prop-types';

import { Users } from './styles';

export default function UsersList({ users, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Users>
      {users.map((user, index) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </Users>
  );
}
