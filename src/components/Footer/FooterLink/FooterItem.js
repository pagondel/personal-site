import React from 'react';
import PropTypes from 'prop-types';

import styles from './FooterItem.module.scss';

const footerLink = (props) => {
  const {
    uri,
    icon,
    type,
  } = props;

  let item;

  switch (type) {
    case 'link':
      item = <a className={styles.Link} href={uri} target="_blank" rel="noopener noreferrer">{icon}</a>;
      break;
    default:
      item = null;
  }

  return item;
};

footerLink.propTypes = {
  uri: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
};

export default footerLink;
