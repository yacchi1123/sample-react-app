import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQiitaDataList } from '../../actions/getQiitaDataList';
import styles from './New.module.css';

const  New = (props) => {
  if (!props.data) {
    return null;
  }
  const list = props.data.map((item, index) => {
    const { title, url } = item;
    return (
      <li key={index} className={styles.newItem}>
        <a
          className={styles.newLink}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </li>
    );
  });

  return (
    <section className={styles.new}>
      <ul className={styles.newList}>
        {list}
      </ul>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.getQiitaDataList.data
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
)(New);