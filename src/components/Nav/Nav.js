import React from 'react';
import PropTypes from 'prop-types';

import styles from './Nav.module.scss';
import Menu from './Menu/Menu';

const nav = (props) => {
  const {
    title,
  } = props;

  return (
    <nav className={styles.Nav}>
      <h1 className={styles.Title}>{title}</h1>
      <Menu />
    </nav>
  );
};

nav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default nav;
