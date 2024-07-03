import styles from "./Backdrop.module.scss";

const Backdrop = ({ children }) => {
  return <div className={styles.backdropContainer}>{children}</div>;
};

export default Backdrop;
