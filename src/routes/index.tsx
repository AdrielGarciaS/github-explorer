import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Loading } from '../components/Loading';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Repository = lazy(() => import('../pages/Repository'));

const renderLoading = () => <Loading />;

const Routes: React.FC = () => (
  <Suspense fallback={renderLoading()}>
    <Switch>
      <Route path="/" exact component={Dashboard} />

      <Route path="/repository/:repository+" component={Repository} />
    </Switch>
  </Suspense>
);

export default Routes;
