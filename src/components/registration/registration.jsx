import { useHandleClick } from "../../helpers/useHandleClick";
import { Button } from "../button/button";
import { LogInInput } from "../log-in-input/log-in-input";

export const Registration = () => {
  const { handleClick, setLogin, setPassword, setEmail } = useHandleClick();

  return (
    <>
      <h2>Регистрация</h2>
      <LogInInput
        id="login"
        placeholder="Логин"
        type="login"
        onChange={(e) => setLogin(e.target.value)}
      />
      <LogInInput
        id="password"
        placeholder="Пароль"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <LogInInput
        id="email"
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button text="Сохранить" type="submit" onClick={handleClick} />
    </>
  );
};
