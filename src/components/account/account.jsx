import { useEffect, useState } from "react";
import { Button } from "../button/button";
import usePersonalData from "../../helpers/usePersonalData";

import styles from "./account.module.css";
import { Input } from "../input/input";

export const Account = () => {
  const [user, setUser] = useState([]);

  const [showLoginInput, setShowLoginInput] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);

  const { updatePersonalData, setLogin, setPassword, setEmail } =
    usePersonalData();

  useEffect(() => {
    const api = "http://localhost:9001/personal-data";

    const token = localStorage.getItem("token");

    fetch(api, {
      headers: { Authorization: token },
    })
      .then((result) => result.json())
      .then((result) => {
        setUser(result.data);
      });
  }, []);

  const { login, password, email } = user;

  const handleShowLoginInput = () => {
    setShowLoginInput(!showLoginInput);
  };

  const handleShowPasswordInput = () => {
    setShowPasswordInput(!showPasswordInput);
  };

  const handleShowEmailInput = () => {
    setShowEmailInput(!showEmailInput);
  };

  return (
    <div className={styles.user}>
      {user ? (
        <>
          <div className={styles.data}>
            <h3>Логин:</h3>
            <p className={styles.dataItem}>{login}</p>
            {showLoginInput ? (
              <Input
                id="login"
                placeholder="Новый логин"
                type="login"
                onChange={(e) => setLogin(e.target.value)}
              />
            ) : (
              <Button
                type="text"
                text="Изменить"
                onClick={handleShowLoginInput}
                viewVariant="default"
              />
            )}
          </div>
          <div className={styles.data}>
            <h3>Пароль:</h3>
            <p className={styles.dataItem}>{password}</p>
            {showPasswordInput ? (
              <Input
                id="password"
                placeholder="Новый пароль"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            ) : (
              <Button
                type="text"
                text="Изменить"
                onClick={handleShowPasswordInput}
                viewVariant="default"
              />
            )}
          </div>
          <div className={styles.data}>
            <h3>Email:</h3>
            <p className={styles.dataItem}>{email}</p>
            {showEmailInput ? (
              <Input
                id="email"
                placeholder="Новый email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <Button
                type="text"
                text="Изменить"
                onClick={handleShowEmailInput}
                viewVariant="default"
              />
            )}
          </div>
        </>
      ) : (
        <h3 className={styles.empty}>Вы не вошли в аккаунт</h3>
      )}
      {showLoginInput || showPasswordInput || showEmailInput ? (
        <Button
          text="Сохранить изменения"
          onClick={updatePersonalData}
          type="submit"
          viewVariant="big"
        />
      ) : null}
    </div>
  );
};
