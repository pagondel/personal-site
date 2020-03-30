import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { PropTypes } from 'prop-types';

import styles from './Layout.module.scss';
import SiteInfo from '../../data/site-info';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      children,
    } = this.props;

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
        <main className={styles.Content}>
          {children}
        </main>
        <footer className={styles.Footer}>
          <Footer />
        </footer>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
