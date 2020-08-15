import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Users from '~/pages/Users';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Users} />
    </Switch>
  );
}
