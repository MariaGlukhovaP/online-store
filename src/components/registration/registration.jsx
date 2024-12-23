import dataFormatter from "../../helpers/dataFormatter";
import { Button } from "../button/button";
import { LogInInput } from "../log-in-input/log-in-input";

export const Registration = () => {
  const handleClick = () => {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    const data = dataFormatter(login, password, email);

    console.log(data);

    const api = "http://localhost:9001/registration";

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
      <h2>Регистрация</h2>
      <LogInInput id="login" placeholder="Логин" type="login" />
      <LogInInput id="password" placeholder="Пароль" type="password" />
      <LogInInput id="email" placeholder="Email" type="email" />
      <Button text="Сохранить" type="submit" onClick={handleClick} />
    </>
  );
};
