import { Button } from "../button/button";

import styles from "./product-list-item.module.css";

export const ProductListItem = ({ name, price, id, img }) => {
  return (
    <li id={id} className={styles.product}>
      <h3 className={styles.title}>{name}</h3>
      <img src={img} alt="Product Img" className={styles.img} />
      <p className={styles.price}>{`${price} руб`}</p>
      <Button text="В корзину" type="button" />
    </li>
  );
};
