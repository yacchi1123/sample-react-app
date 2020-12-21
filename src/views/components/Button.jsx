import styles from './Button.module.css';

function Button(props) {
  return (
    <button
      onClick={props.method}
      className={styles.buttonDefault}
    >
      {props.text}
    </button>
  );
}

export default Button;