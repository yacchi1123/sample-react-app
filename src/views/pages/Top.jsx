import { useState } from 'react';
import styles from './Top.module.css';
import Header from '../components/Header';
import New from '../components/New';

function Top() {
  const [isShowNew, setIsShowNew] = useState(false);

  const fetchData = (e) => {
    e.preventDefault();
    setIsShowNew(true);
  }

  return (
    <div className={styles.wrap}>
      <Header />
      <main>
        <div className={styles.buttonArea}>
          <p>Qiitaの最新記事を取得します。</p>
          <button
            onClick={fetchData}
            className={styles.buttonDefault}
          >
            データ取得
          </button>
        </div>
        { isShowNew ? <New /> : null }
      </main>
    </div>
  );
}

export default Top;