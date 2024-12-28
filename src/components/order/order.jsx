import { Button } from "../button/button";
import { Input } from "../input/input";

export const Order = () => {
  return (
    <>
      <h2>Оформление заказа</h2>
      <Input id="number" placeholder="Номер карты" type="number" />
      <Input id="data" placeholder="Месяц/год" type="data" />
      <Input id="cvc" placeholder="CVC" type="cvc" />
      <Button text="Подтвердить" type="submit" viewVariant="default" />
    </>
  );
};
