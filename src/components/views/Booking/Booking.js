import React from 'react';
import PropTypes from 'prop-types';

import styles from './Booking.module.scss';

const Booking = (props) => (
  <div className={styles.container}>
    <h2>Booking View</h2>
    <p>{props.match.params.id}</p>
  </div>
);

Booking.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default Booking;