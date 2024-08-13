import styles from "./Title2.module.scss";

const Title2 = ({ children }) => {
  return <h2 className={styles.title2}>{children}</h2>;
};

export default Title2;
