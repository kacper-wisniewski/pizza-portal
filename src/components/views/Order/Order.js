import React from 'react';
import PropTypes from 'prop-types';

import styles from './Order.module.scss';

const Order = (props) => {
  return (
    <div className={styles.container}>
      <h2>Order View</h2>
      <p>{props.match.params.id}</p>
    </div>
  );
};

Order.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default Order;