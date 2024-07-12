import { useState } from "react";
//STYLES
import styles from "./Avatar.module.scss";
import DropDown from "../DropDown/DropDown";
//COMPONENTS

const Avatar = ({ user, onClick, customClass }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = () => setOpenDropdown(!openDropdown);

  return (
    <article className={styles.avatarContainer}>
      <button className={styles.avatarBtn} onClick={handleClick}>
        {user?.firstName[0].toUpperCase()}
      </button>
      {openDropdown && <DropDown userName={user?.firstName} />}
    </article>
  );
};

export default Avatar;
