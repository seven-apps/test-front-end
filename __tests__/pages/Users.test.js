import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, fireEvent } from '@testing-library/react';
import api from '~/services/api';
import Users from '~/pages/Users';

const apiMock = new MockAdapter(api);

describe('Users page', () => {
  it('should get api data', async () => {
    apiMock.onGet('users').reply(200, { data: [{ name: 'Pedro', age: 24 }] });
  });

  it('should render Users component', () => {
    const { getByTestId } = render(<Users />);
    expect(getByTestId('wrapper')).toContainElement(getByTestId('content'));
  });

  it('should check if filter by name is working', () => {
    const { getByLabelText, getByTestId, getByText } = render(<Users />);

    fireEvent.change(getByLabelText('NOME'), { target: { value: 'Pedro' } });

    expect(getByTestId('list')).toContainElement(getByText('Pedro'));
  });
});
