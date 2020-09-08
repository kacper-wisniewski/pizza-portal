import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import PageNav from './components/layout/PageNav/PageNav';

import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';

import AddReservation from './components/views/AddReservation/AddReservation';
import Booking from './components/views/Booking/Booking';
import Order from './components/views/Order/Order';
import AddOrder from './components/views/AddOrder/AddOrder';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <PageNav />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={`/`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={AddReservation} />
          <Route path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={AddOrder} />
          <Route path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;