import styles from "./log-in-input.module.css";

export const LogInInput = ({ id, placeholder, type }) => {
  return (
    <input
      className={styles.input}
      id={id}
      placeholder={placeholder}
      type={type}
    />
  );
};
