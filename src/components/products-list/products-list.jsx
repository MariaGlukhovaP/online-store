import { useEffect, useState } from "react";
import { ProductListItem } from "../product-list-item/product-list-item";

import styles from "./product-list.module.css";

export const ProductsList = () => {
  const [headphones, setHeadphones] = useState([]);

  useEffect(() => {
    const api = "http://localhost:9001/products";

    fetch(api)
      .then((result) => result.json())
      .then((result) => {
        setHeadphones(result.data);
      });
  }, []);

  return (
    <ul className={styles.productsContainer}>
      {headphones.map(({ name, price, _id, img }) => (
        <ProductListItem
          key={_id}
          name={name}
          price={price}
          id={_id}
          img={img}
        />
      ))}
    </ul>
  );
};
