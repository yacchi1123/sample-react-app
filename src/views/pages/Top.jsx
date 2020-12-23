import { useState } from 'react';
import styles from './Top.module.css';
import Header from '../components/Header';
import New from '../components/New';
import Button from '../components/Button';
import { qiitaApi } from '../../services/api';

function Top() {
  const [isShowNew, setIsShowNew] = useState(false);
  const [qiitaData, setQiitaData] = useState('');

  const itemParams = {
    page: 1,
    per_page: 5
  }

  const fetchData = () => {
    qiitaApi.get('/items', { params: itemParams }).then((result) => {
      setQiitaData(result.data);
      setIsShowNew(true);
    }).catch((e) => {
      console.error(e);
    })
  }

  return (
    <div className={styles.wrap}>
      <Header />
      <main>
        <div className={styles.buttonArea}>
          <p>Qiitaの最新記事を取得します。</p>
          <Button text="データ取得" method={fetchData} />
        </div>
        { isShowNew && <New data={qiitaData} /> }
      </main>
    </div>
  );
}

export default Top;