import styles from "./input.module.css";

export const Input = ({ id, placeholder, type, onChange }) => {
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
