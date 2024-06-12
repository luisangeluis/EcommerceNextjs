import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import styles from "./Avatar.module.scss";

const Avatar = ({ name, onClick, customClass }) => {
  return (
    <article className={styles.avatarContainer}>
      <p className={styles.title}>{`Hello ${name}`}</p>
      <BtnCustom onClick={onClick} customClass={`${customClass}`}>
        Log out
      </BtnCustom>
    </article>
  );
};

export default Avatar;
