import React from 'react';
import { List } from 'react-virtualized';
import { FaSpinner } from 'react-icons/fa';
import { ListContainer, Row, Content, Loading } from './styles';

export default function UsersList({ users, loading }) {
  if (loading) {
    return (
      <Loading>
        <FaSpinner color="#FFF" size={40} />
      </Loading>
    );
  }

  function renderRow({ index, key, style }) {
    return (
      <Row key={key} style={style}>
        <Content>
          <p>Nome: {users[index].name}</p>
          <p>Idade: {users[index].age}</p>
        </Content>
      </Row>
    );
  }
  return (
    <ListContainer>
      <List
        width={850}
        height={600}
        rowHeight={80}
        rowRenderer={renderRow}
        rowCount={users.length}
      />
    </ListContainer>
  );
}
