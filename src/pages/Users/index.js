import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import api from '~/services/api';
import UsersList from '~/components/UsersList';

import { Wrapper, UserContainer, Header, Content, Title } from './styles';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);
      const { data } = await api.get();

      setUsers(data.data);
      setLoading(false);
    }
    loadUsers();
  }, []);

  async function handleSearchByName(e) {
    const searchName = e.target.value;
    setName(searchName);

    setLoading(true);

    const { data } = await api.get();

    const usersFiltered = data.data.filter(user =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );

    setUsers(usersFiltered);
    setLoading(false);
  }

  async function handleSearchByAge(e) {
    const searchAge = e.target.value;
    setAge(searchAge);

    setLoading(true);

    const { data } = await api.get();

    const usersFiltered = data.data.filter(
      user => user.age.toString() === searchAge
    );

    if (searchAge === '') {
      setUsers(data.data);
      setLoading(false);
    } else {
      setUsers(usersFiltered);
      setLoading(false);
    }
  }

  return (
    <Wrapper>
      <Content>
        <Title>User Searcher</Title>
        <Header>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleSearchByName}
            />
          </div>
          <div>
            <label htmlFor="age">Idade</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={handleSearchByAge}
            />
          </div>
        </Header>
        <UserContainer>
          <UsersList users={users} loading={loading} />
        </UserContainer>
      </Content>
    </Wrapper>
  );
}
