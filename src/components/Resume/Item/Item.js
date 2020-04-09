import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

const item = (props) => {
  const {
    company,
    position,
    time,
    extract,
    tools,
  } = props;

  const parsedTools = tools.map((tool) => (
    <li>{tool}</li>
  ));

  return (
    <div className={styles.Content}>
      <h2>{company}</h2>
      <div className={styles.Info}>
        <span>
          <i className="fas fa-angle-right" aria-hidden="true" />
          {position}
        </span>
        <span>
          <i className="far fa-calendar" aria-hidden="true" />
          {time}
        </span>
      </div>
      <p>{extract}</p>
      <ul className={styles.Skills}>
        {parsedTools}
      </ul>
    </div>
  );
};

item.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  extract: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default item;
