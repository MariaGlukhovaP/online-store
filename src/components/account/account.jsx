import { useEffect, useState } from "react";
import { Button } from "../button/button";
import usePersonalData from "../../helpers/usePersonalData";

import styles from "./account.module.css";
import { Input } from "../input/input";

export const Account = () => {
  const [user, setUser] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const { handleClick, setLogin, setPassword, setEmail } = usePersonalData();

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

  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className={styles.user}>
      {user ? (
        <>
          <div className={styles.data}>
            <h3>Логин:</h3>
            <p className={styles.dataItem}>{login}</p>
            {showInput ? (
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
                onClick={handleShowInput}
                viewVariant="default"
              />
            )}
          </div>
          <div className={styles.data}>
            <h3>Пароль:</h3>
            <p className={styles.dataItem}>{password}</p>
            {showInput ? (
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
                onClick={handleShowInput}
                viewVariant="default"
              />
            )}
          </div>
          <div className={styles.data}>
            <h3>Email:</h3>
            <p className={styles.dataItem}>{email}</p>
            {showInput ? (
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
                onClick={handleShowInput}
                viewVariant="default"
              />
            )}
          </div>
        </>
      ) : (
        <h3 className={styles.empty}>Вы не вошли в аккаунт</h3>
      )}
      <Button
        text="Сохранить изменения"
        onClick={handleClick}
        type="submit"
        viewVariant="big"
      />
    </div>
  );
};
