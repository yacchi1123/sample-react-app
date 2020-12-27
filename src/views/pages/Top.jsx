import { useState, useEffect } from 'react';
import styles from './Top.module.css';
import Header from '../components/Header';
import New from '../components/New';
import Button from '../components/Button';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQiitaDataList } from '../../actions/getQiitaDataList';

const Top = (props) => {
  const [isShowNew, setIsShowNew] = useState(false);

  const params = {
    page: 1,
    per_page: 5
  }

  useEffect(() => {
    if (!props.isFetching && props.data) {
      // データ取得できた場合
      setIsShowNew(true);
    }
  // eslint-disable-next-line 
  }, [props.data]);

  const fetchData = () => {
    setIsShowNew(false); // 一度非表示にしてからデータ取得
    props.getQiitaDataList(params);
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

const mapStateToProps = (state) => {
  return {
    data: state.getQiitaDataList.data,
    isFetching: state.getQiitaDataList.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQiitaDataList: bindActionCreators(getQiitaDataList, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);