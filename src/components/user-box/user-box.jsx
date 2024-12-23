import styles from "./user-box.module.css";

export const UserBox = ({ setModalBox }) => {
  return (
    <div className={styles.userBox}>
      <button className={styles.button} onClick={() => setModalBox("Login")}>
        Вход
      </button>
      <button
        className={styles.button}
        onClick={() => setModalBox("Registration")}
      >
        Регистрация
      </button>
    </div>
  );
};
