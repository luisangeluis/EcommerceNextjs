import { useState } from "react";
//STYLES
import styles from "./Avatar.module.scss";
//COMPONENTS
import DropDown from "../DropDown/DropDown";

const list = [{ route: "my-purchases", displayName: "My purchases" }];

const Avatar = ({ user, onClick, customClass }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = () => setOpenDropdown(!openDropdown);

  return (
    <article className={styles.avatarContainer}>
      <button className={styles.avatarBtn} onClick={handleClick}>
        {user?.firstName[0].toUpperCase()}
      </button>
      {openDropdown && (
        <DropDown
          userName={user?.firstName}
          customClass={"btnThree"}
          list={list}
        />
      )}
    </article>
  );
};

export default Avatar;
