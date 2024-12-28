import usePersonalData from "../../helpers/usePersonalData";
import { Button } from "../button/button";
import { LogInInput } from "../log-in-input/log-in-input";

export const LogIn = () => {
  const { handleClick, setLogin, setPassword } = usePersonalData();

  return (
    <>
      <h2>Вход</h2>
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
      <Button
        text="Войти"
        type="submit"
        onClick={handleClick}
        viewVariant="default"
      />
    </>
  );
};
