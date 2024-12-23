import { NavList } from "../nav-list/nav-list";

import styles from "./footer.module.css";

export const Footer = ({ setPage }) => {
  return (
    <div className={styles.footer}>
      <NavList setPage={setPage} />
    </div>
  );
};
