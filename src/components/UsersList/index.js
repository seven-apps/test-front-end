import React from 'react';
import { List } from 'react-virtualized';

import './styles.css';

export default function UsersList({ users }) {
  function renderRow({ index, key, style }) {
    return (
      <div key={key} style={style} className="row">
        <div className="content">
          <p>Nome: {users[index].name}</p>
          <p>Idade: {users[index].age}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="list">
      <List
        width={850}
        height={600}
        rowHeight={80}
        rowRenderer={renderRow}
        rowCount={users.length}
      />
    </div>
  );
}
