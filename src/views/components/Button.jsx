import styles from './Button.module.css';

const Button = (props) => {
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