import { NavList } from "../nav-list/nav-list";
import { UserBox } from "../user-box/user-box";
import cart from "./../../components/img/cart.svg";

import styles from "./header.module.css";

export const Header = ({ setModalBox, setPage }) => {
  return (
    <div className={styles.header}>
      <NavList setPage={setPage} />
      <UserBox setModalBox={setModalBox} />
      <img
        className={styles.cart}
        src={cart}
        alt="Cart"
        onClick={() => setPage("Cart")}
      />
    </div>
  );
};
