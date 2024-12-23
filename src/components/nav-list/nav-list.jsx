import styles from "./nav-list.module.css";

export const NavList = ({ setPage }) => {
  return (
    <ul className={styles.navList}>
      <li className={styles.listItem} onClick={() => setPage("Main")}>
        Главная
      </li>
      <li className={styles.listItem} onClick={() => setPage("User")}>
        Личный кабинет
      </li>
    </ul>
  );
};
