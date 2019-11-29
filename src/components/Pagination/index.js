import React from 'react';

import { Pages } from './styles';

export default function Pagination({ usersPerPage, totalUsers, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pages>
      {pageNumbers.map(number => (
        <li key={number}>
          <a onClick={() => paginate(number)} href="!#">
            {number}
          </a>
        </li>
      ))}
    </Pages>
  );
}
