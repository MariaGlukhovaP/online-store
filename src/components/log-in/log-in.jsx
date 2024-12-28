import usePersonalData from "../../helpers/usePersonalData";
import { Button } from "../button/button";
import { Input } from "../input/input";

export const LogIn = () => {
  const { handleClick, setLogin, setPassword } = usePersonalData();

  return (
    <>
      <h2>Вход</h2>
      <Input
        id="login"
        placeholder="Логин"
        type="login"
        onChange={(e) => setLogin(e.target.value)}
      />
      <Input
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
