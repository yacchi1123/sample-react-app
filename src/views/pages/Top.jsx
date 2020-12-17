import styles from './Top.module.css';
import Header from '../components/Header';

function Top() {
  const fetchData = (e) => {
    e.preventDefault();
    console.log('click');
  }

  return (
    <div className={styles.wrap}>
      <Header />
      <main>
        <div className={styles.buttonArea}>
          <p>Qiitaの最新記事を取得します。</p>
          <a
            href="https://ja.reactjs.org/docs/handling-events.html"
            onClick={fetchData}
            className={styles.buttonDefault}
          >
            データ取得
          </a>
        </div>
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
      </main>
    </div>
  );
}

export default Top;