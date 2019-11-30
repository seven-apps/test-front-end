import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import UsersList from '~/components/UsersList';

import { Wrapper, UserContainer, Header, Content, Title } from './styles';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get();

      const data = response.data.data.map((user, index) => ({
        id: index + 1,
        ...user,
      }));
      setUsers(data);
    }
    loadUsers();
  }, []);

  async function handleSearchByName(e) {
    const searchName = e.target.value;
    setName(searchName);

    const { data } = await api.get();

    const usersFiltered = data.data.filter(user =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );

    setUsers(usersFiltered);
  }

  async function handleSearchByAge(e) {
    const searchAge = e.target.value;
    setAge(searchAge);

    const { data } = await api.get();

    const usersFiltered = data.data.filter(
      user => user.age.toString() === searchAge
    );

    if (searchAge === '') {
      setUsers(data.data);
    } else {
      setUsers(usersFiltered);
    }
  }

  return (
    <Wrapper>
      <Content>
        <Title>Searcher</Title>
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
          <UsersList users={users} />
        </UserContainer>
      </Content>
    </Wrapper>
  );
}
