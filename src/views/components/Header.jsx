import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1>テストロゴ</h1>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#1">Menu1</a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#2">Menu2</a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#3">Menu3</a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#4">Menu4</a>
          </li>
        </ul>
      </nav>          
    </header>
  );
}

export default Header;