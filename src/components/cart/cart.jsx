import { Button } from "../button/button";
import { useCart } from "../cart-context/use-cart";
import { CartListItem } from "../cart-list-item/cart-list-item";

import styles from "./cart.module.css";

export const Cart = ({ setModalBox }) => {
  const { cartItems } = useCart();

  const countTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <div>
      <ul className={styles.list}>
        {cartItems.map((product) => (
          <CartListItem product={product} />
        ))}
      </ul>

      {cartItems.length ? (
        <div className={styles.order}>
          <div className={styles.total}>К оплате: {countTotal() + " руб"}</div>
          <Button
            text="Оформить заказ"
            type="submit"
            viewVariant="big"
            onClick={() => setModalBox("Order")}
          />
        </div>
      ) : (
        <h3 className={styles.empty}>Корзина пуста</h3>
      )}
    </div>
  );
};
