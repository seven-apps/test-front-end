import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'react-virtualized';
import { FaSpinner } from 'react-icons/fa';
import { ListContainer, Row, Content, Loading } from './styles';

export default function UsersList({ users, loading }) {
  if (loading) {
    return (
      <Loading data-testid="loading">
        <FaSpinner data-testid="svg" color="#FFF" size={40} />
      </Loading>
    );
  }

  function renderRow({ index, key, style }) { //eslint-disable-line
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
    <ListContainer data-testid="listContainer">
      <List
        data-testid="list"
        width={850}
        height={600}
        rowHeight={80}
        rowRenderer={renderRow}
        rowCount={users.length}
      />
    </ListContainer>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ),
  loading: PropTypes.bool,
};

UsersList.defaultProps = {
  users: [],
  loading: false,
};
