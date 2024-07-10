import { useState } from "react";
//STYLES
import styles from "./Avatar.module.scss";
//COMPONENTS
import DropDown from "../DropDown/DropDown";

const Avatar = ({ user, onClick, customClass, children }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = () => setOpenDropdown(!openDropdown);

  return (
    <article className={styles.avatarContainer}>
      <button className={styles.avatarBtn} onClick={handleClick}>
        {user?.firstName[0].toUpperCase()}
      </button>
      <p>{user?.firstName}</p>
      {openDropdown && children}
      {/* <DropDown name={name} onClick={onClick} customClass={customClass} /> */}
    </article>
  );
};

export default Avatar;
