import { Button } from "../button/button";
import styles from "./user-box.module.css";

export const UserBox = ({ setModalBox }) => {
  return (
    <div className={styles.userBox}>
      <Button
        text="Вход"
        onClick={() => setModalBox("Login")}
        type="text"
        viewVariant="light"
      />
      <Button
        text="Регистрация"
        onClick={() => setModalBox("Registration")}
        type="text"
        viewVariant="light"
      />
    </div>
  );
};
