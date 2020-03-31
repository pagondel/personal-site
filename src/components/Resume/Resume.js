import React from 'react';

import styles from './Resume.module.scss';
import Item from './Item/Item';
import data from '../../data/resume';

const resume = () => {
  const items = data.resume.map((item) => (
    <li className={styles.Item}>
      <Item
        company={item.company}
        position={item.position}
        time={item.time}
        extract={item.extract}
        tools={item.tools}
      />
    </li>
  ));

  return (
    <div className={styles.Resume}>
      <h1 className={styles.Title}>Resume</h1>
      <ul className={styles.Timeline}>
        {items}
      </ul>
    </div>
  );
};

export default resume;
