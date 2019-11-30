import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render } from '@testing-library/react';
import api from '~/services/api';
import Users from '~/pages/Users';

const apiMock = new MockAdapter(api);

describe('Users page', () => {
  it('should be able to fetch users', async () => {
    const setState = jest.fn();

    const {} = render(<Users />);

    apiMock.onGet().reply(200, { data: [{ name: 'Pedro', age: 24 }] });
  });
});
