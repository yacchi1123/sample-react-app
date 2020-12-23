import styles from './New.module.css';

function New(props) {
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
  // result.data.forEach((item) => {
  //   const { title, url } = item;
  //   setTitle(title);
  //   setUrl(url);
  // });
  return (
    <section className={styles.new}>
      <ul className={styles.newList}>
        {list}
      </ul>
    </section>
  );
}

export default New;