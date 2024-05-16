import styles from "./ModalContainer.module.scss";

const ModalContainer = ({ component }) => {
  return <section className={styles.modalContainer}>{component}</section>;
};

export default ModalContainer;
