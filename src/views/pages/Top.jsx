import { useState } from 'react';
import styles from './Top.module.css';
import Header from '../components/Header';
import New from '../components/New';
import Button from '../components/Button';

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
          <Button text="データ取得" method={fetchData} />
        </div>
        { isShowNew && <New /> }
      </main>
    </div>
  );
}

export default Top;