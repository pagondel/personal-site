import React from 'react';

import data from '../../data/home';
import styles from './Home.module.scss';

const home = () => (
  <div className={styles.Home}>
    <div className={styles.Photo}>
      <img src={data.photo} alt={data.photoAlt} />
    </div>
    <h1 className={styles.Title}>{data.title}</h1>
    <p className={styles.Text}>{data.text}</p>
  </div>
);

export default home;
