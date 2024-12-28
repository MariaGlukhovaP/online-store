import usePersonalData from "../../helpers/usePersonalData";
import { Button } from "../button/button";
import { Input } from "../input/input";

export const Registration = () => {
  const { setPersonalData, setLogin, setPassword, setEmail } =
    usePersonalData();

  return (
    <>
      <h2>Регистрация</h2>
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
      <Input
        id="email"
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        text="Сохранить"
        type="submit"
        onClick={setPersonalData}
        viewVariant="default"
      />
    </>
  );
};
