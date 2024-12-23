import styles from "./page-title.module.css";

export const PageTitle = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};
