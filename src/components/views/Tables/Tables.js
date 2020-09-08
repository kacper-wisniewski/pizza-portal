import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Tables.module.scss';

const Tables = () => {
  return (
    <div className={styles.container}>
      <h2>Tables View</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/${'123-id'}`}>Reservations</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Add Reservation</Link>
    </div>
  );
};

export default Tables;