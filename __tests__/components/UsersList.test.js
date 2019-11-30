import React from 'react';
import { render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import UsersList from '~/components/UsersList';

const apiMock = new MockAdapter(api);

describe('UsersList component', () => {
  it('should render a complete component', async () => {
    const { getByTestId, getByText } = render(<UsersList />);

    apiMock.onGet('users').reply(200, { data: [{ name: 'Pedro', age: 24 }] });

    expect(getByTestId('list')).toContainElement(getByText('Pedro'));
  });
});
