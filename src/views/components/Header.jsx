import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1>テストロゴ</h1>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/">Menu1</Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/menu2">Menu2</Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/menu3">Menu3</Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/menu4">Menu4</Link>
          </li>
        </ul>
      </nav>          
    </header>
  );
}

export default Header;