import React from 'react';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>header</header>
      <aside className={styles.Sidebar}>sidebar</aside>
      <main className={styles.Content}>content</main>
      <footer className={styles.Footer}>footer</footer>
    </div>
  );
}

export default App;
