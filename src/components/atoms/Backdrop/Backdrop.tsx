import styles from "./Backdrop.module.scss";

const Backdrop = ({ children, customClass }) => {
  return (
    <div className={`${styles.backdropContainer} ${styles[customClass]}`}>
      {children}
    </div>
  );
};

export default Backdrop;
