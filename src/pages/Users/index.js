import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { Container } from './styles';

import UsersList from '~/components/UsersList';
import Pagination from '~/components/Pagination';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [usersPerPage] = useState(10);

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);
      const response = await axios.get(
        'https://random-persons.herokuapp.com/users'
      );

      const data = response.data.data.map((user, index) => ({
        id: index + 1,
        ...user,
      }));
      setUsers(data);
      setLoading(false);
    }
    loadUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  console.tron.log(users);

  return (
    <div>
      <h1>Usuários</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <input type="number" value={age} onChange={e => setAge(e.target.value)} />
      <UsersList users={currentUsers} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
}
