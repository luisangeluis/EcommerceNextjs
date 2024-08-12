import styles from "./SubTitle2.module.scss";

const SubTitle2 = ({ children }) => {
  return (
    <h6 className={styles.subTitle2}>{children}</h6>
  );
};

export default SubTitle2;