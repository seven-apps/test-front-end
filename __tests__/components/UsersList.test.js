import React from 'react';
import { render } from '@testing-library/react';

import UsersList from '~/components/UsersList';

describe('UsersList component', () => {
  it('should render loading', () => {
    const loading = true;
    const { getByTestId } = render(<UsersList loading={loading} />);

    expect(getByTestId('loading')).toContainElement(getByTestId('svg'));
  });
  it('should render component UsersList', () => {
    const loading = false;
    const { getByTestId } = render(<UsersList loading={loading} />);

    expect(getByTestId('listContainer'));
  });
});
