import styles from "./modal-box.module.css";

export const ModalBox = ({ setModalBox, children }) => {
  return (
    <>
      <div className={styles.echo} onClick={() => setModalBox("none")}></div>
      <div className={styles.modalBox}>{children}</div>
    </>
  );
};
