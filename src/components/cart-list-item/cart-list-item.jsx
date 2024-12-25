import { useCart } from "../cart-context/use-cart";
import remove from "./../img/remove.svg";

import styles from "./cart-list-item.module.css";

export const CartListItem = ({ product }) => {
  const { name, price, id } = product;

  const { handleRemoveFromCart } = useCart();

  return (
    <li key={id} className={styles.item}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>{`${price} руб`}</p>
      <img
        src={remove}
        alt="Remove"
        className={styles.remove}
        onClick={() => handleRemoveFromCart(product)}
      />
    </li>
  );
};
