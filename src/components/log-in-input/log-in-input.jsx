import styles from "./log-in-input.module.css";

export const LogInInput = ({ id, placeholder, type, onChange }) => {
  return (
    <input
      className={styles.input}
      id={id}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
};
