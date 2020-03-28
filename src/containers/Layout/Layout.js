import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import styles from './Layout.module.scss';
import SiteInfo from '../../data/site-info';
import Nav from '../../components/Nav/Nav';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.App}>
        <Helmet>
          <title>{SiteInfo.title}</title>
          <meta name="keywords" content={SiteInfo.keywords.join()} />
          <meta name="description" content={SiteInfo.description} />
          <script src={SiteInfo.fontAwesome} cossorigin="anonymous" />
        </Helmet>
        <header className={styles.Header}>
          <Nav
            title={SiteInfo.title}
          />
        </header>
        <aside className={styles.Sidebar} />
        <main className={styles.Content}>content</main>
        <footer className={styles.Footer}>footer</footer>
      </div>
    );
  }
}

export default Layout;
