import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Waiter.module.scss';

const Waiter = () => (
  <div className={styles.container}>
    <h2>Waiter View</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/${'123-id'}`}>Order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>Add Order</Link>
  </div>
);

export default Waiter;