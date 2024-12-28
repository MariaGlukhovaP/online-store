import classNames from "classnames";

import styles from "./button.module.css";

export const Button = ({ text, onClick, type, viewVariant }) => {
  return (
    <button
      className={classNames({
        [styles.default]: viewVariant === "default",
        [styles.big]: viewVariant === "big",
        [styles.light]: viewVariant === "light",
      })}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
