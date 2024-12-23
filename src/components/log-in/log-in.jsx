import dataFormatter from "../../helpers/dataFormatter";
import { Button } from "../button/button";
import { LogInInput } from "../log-in-input/log-in-input";

export const LogIn = () => {
  const handleClick = () => {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    const data = dataFormatter(login, password);

    console.log(data);

    const api = "http://localhost:9001/login";

    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <>
      <h2>Вход</h2>
      <LogInInput id="login" placeholder="Логин" type="login" />
      <LogInInput id="password" placeholder="Пароль" type="password" />
      <Button text="Войти" type="submit" onClick={handleClick} />
    </>
  );
};
