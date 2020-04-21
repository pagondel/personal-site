import React from 'react';

import data from '../../data/footer';
import FooterItem from './FooterLink/FooterItem';
import styles from './Footer.module.scss';

const footer = () => {
  const items = data.items.map((item) => (
    <li key={Math.random()}>
      <FooterItem
        uri={item.uri}
        icon={item.icon}
        type={item.type}
      />
    </li>
  ));

  return (
    <ul className={styles.Footer}>
      {items}
    </ul>
  );
};

export default footer;
