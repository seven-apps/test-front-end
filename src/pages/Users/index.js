import React, { useState, useEffect } from 'react';
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
      user.name
        .toLowerCase()
        .includes(
          searchName.toLowerCase() ||
            user.name.toLowerCase() === searchName.toLowerCase()
        )
    );

    if (searchName === '') {
      setUsers(data.data);
      setLoading(false);
    } else {
      setUsers(usersFiltered);
      setLoading(false);
    }
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
    <Wrapper data-testid="wrapper">
      <Content data-testid="content">
        <Title>Busca Usuários</Title>
        <hr />
        <Header>
          <div>
            <label htmlFor="name">NOME</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleSearchByName}
            />
          </div>
          <div>
            <label htmlFor="age">IDADE</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={handleSearchByAge}
            />
          </div>
        </Header>
        <UserContainer data-testid="list">
          <UsersList users={users} loading={loading} />
        </UserContainer>
      </Content>
    </Wrapper>
  );
}
