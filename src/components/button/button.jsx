import styles from "./button.module.css";

export const Button = ({ text, onClick, type }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {text}
    </button>
  );
};
