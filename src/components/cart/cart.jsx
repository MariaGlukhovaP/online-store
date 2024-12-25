import { useCart } from "../cart-context/use-cart";
import { CartListItem } from "../cart-list-item/cart-list-item";

import styles from "./cart.module.css";

export const Cart = () => {
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
      <div className={styles.order}>
        <div className={styles.total}>К оплате: {countTotal() + " руб"}</div>
        <button type="submit" className={styles.submit}>
          Оформить заказ
        </button>
      </div>
    </div>
  );
};
