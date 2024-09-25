import { useEffect, useRef, useState } from "react";
//STYLES
import styles from "./Avatar.module.scss";
//COMPONENTS
import DropDown from "../DropDown/DropDown";

const list = [{ route: "my-purchases", displayName: "My purchases" }];

const Avatar = ({ user, onClick, customClass }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  //console.log({ openDropdown });

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    document.addEventListener("keydown", checkKey);

    // Limpia el evento al desmontar el componente
    return () => {
      document.removeEventListener("click", closeDropdown);
      document.removeEventListener("keydown", checkKey);
    };
  }, [openDropdown]);

  const handleClick = (e) => {
    e.stopPropagation();
    setOpenDropdown(!openDropdown);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenDropdown(false);
    }
  };

  const checkKey = (e) => {
    console.log(e.code);
    if (e.key === "Escape") setOpenDropdown(false);
  };

  return (
    <article className={styles.avatarContainer}>
      <button className={styles.avatarBtn} onClick={handleClick}>
        {user?.firstName[0].toUpperCase()}
      </button>
      {openDropdown && (
        <div ref={dropdownRef}>
          <DropDown
            userName={user?.firstName}
            customClass={"btnBorderDark"}
            list={list}
          />
        </div>
      )}
    </article>
  );
};

export default Avatar;
