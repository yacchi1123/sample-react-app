import styles from './New.module.css';

function New() {
  return (
    <section className={styles.new}>
      <ul className={styles.newList}>
        <li className={styles.newItem}>
          <a href="#1">タイトルが入ります。タイトルが入ります。タイトルが入ります。</a>
        </li>
        <li className={styles.newItem}>
          <a href="#2">タイトルが入ります。タイトルが入ります。タイトルが入ります。</a>
        </li>
        <li className={styles.newItem}>
          <a href="#3">タイトルが入ります。タイトルが入ります。タイトルが入ります。</a>
        </li>
      </ul>
    </section>
  );
}

export default New;