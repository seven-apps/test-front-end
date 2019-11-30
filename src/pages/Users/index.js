import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from 'react-virtualized';

// import { Container } from './styles';
import './styles.css';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState();

  useEffect(() => {
    async function loadUsers() {
      const response = await axios.get(
        'https://random-persons.herokuapp.com/users'
      );

      const data = response.data.data.map((user, index) => ({
        id: index + 1,
        ...user,
      }));
      setUsers(data);
    }
    loadUsers();
  }, []);

  function renderRow({ index, key, style }) {
    return (
      <div key={key} style={style} className="row">
        <div className="content">
          <div>Nome: {users[index].name}</div>
          <div>Idade: {users[index].age}</div>
        </div>
      </div>
    );
  }

  function handleSearchByName(e) {
    const searchName = e.target.value;
    setName(searchName);

    const data = users.filter(user => user.name === searchName);
    setUsers(data);
  }

  function handleSearchByAge(e) {
    const searchAge = e.target.value;
    setAge(searchAge);

    const data = users.filter(user => user.age === searchAge);
    setUsers(data);
  }

  return (
    <>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" value={name} onChange={handleSearchByName} />
      <label htmlFor="age">Idade</label>
      <input type="number" id="age" value={age} onChange={handleSearchByAge} />
      <div className="list">
        <List
          width={800}
          height={600}
          rowHeight={50}
          rowRenderer={renderRow}
          rowCount={users.length}
        />
      </div>
    </>
  );
}
