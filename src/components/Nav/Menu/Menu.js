import React, { Component } from 'react';
import styles from './Menu.module.scss';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuClasses: [
        styles.Menu,
      ],
    };
  }

  handleOpenMenu = (event) => {
    if (event.type === 'keypress' && event.key !== 'Enter') {
      return;
    }

    const {
      menuClasses,
    } = this.state;
    const newMenuClasses = [...menuClasses];
    newMenuClasses.push(styles.Open);

    this.setState({ menuClasses: newMenuClasses });
  }

  handleCloseMenu = (event) => {
    if (event.type === 'keypress' && event.key !== 'Enter') {
      return;
    }

    const {
      menuClasses,
    } = this.state;
    const newMenuClasses = menuClasses.filter((menuClass) => menuClass !== styles.Open);

    this.setState({ menuClasses: newMenuClasses });
  }

  render() {
    const {
      menuClasses,
    } = this.state;

    let backdrop = null;

    if (menuClasses.includes(styles.Open)) {
      backdrop = (
        <div
          className={styles.Backdrop}
          onClick={this.handleCloseMenu}
          onKeyPress={this.handleCloseMenu}
          role="button"
          tabIndex="0"
          aria-label="backdrop"
        />
      );
    }

    return (
      <>
        {backdrop}
        <div
          className={styles.Hamburger}
          onClick={this.handleOpenMenu}
          onKeyPress={this.handleOpenMenu}
          role="button"
          tabIndex="0"
          aria-label="Open menu"
        >
          <i className="fas fa-bars" />
        </div>
        <div className={menuClasses.join(' ')}>
          <div
            className={styles.CloseTag}
            onClick={this.handleCloseMenu}
            onKeyPress={this.handleCloseMenu}
            role="button"
            tabIndex="0"
            aria-label="Close menu"
          >
            <i className="fas fa-times fa-2x" />
          </div>
          <ul className={styles.Items}>
            <li className={styles.Item}>Inicio</li>
            <li className={styles.Item}>Resume</li>
            <li className={styles.Item}>Contacto</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Menu;
