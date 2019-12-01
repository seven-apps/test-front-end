import React from 'react';
import { render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import UsersList from '~/components/UsersList';

const apiMock = new MockAdapter(api);

describe('UsersList component', () => {
  it('should render a complete component', async () => {
        const users = apiMock
      .onGet()
      .reply(200, { data: [{ name: 'Pedro', age: 24 }] });
      const loading = false;
    const { getByTestId, getByText } = render(<UsersList users={users} loading={loading} />);


    expect(getByTestId('list')).toContainElement(getByText('Pedro'));
  });
});
