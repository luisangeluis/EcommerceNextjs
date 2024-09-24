import { useEffect, useRef, useState } from "react";
//STYLES
import styles from "./Avatar.module.scss";
//COMPONENTS
import DropDown from "../DropDown/DropDown";

const list = [{ route: "my-purchases", displayName: "My purchases" }];

const Avatar = ({ user, onClick, customClass }) => {
  const dropdownRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  console.log({ openDropdown });

  useEffect(() => {
    const hideDropdown = (e) => {
      console.log("click document");

      if (openDropdown) {
        console.log("drop opened");
        /*
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setOpenDropdown(false);
        }*/
      }
    };

    document.addEventListener("click", hideDropdown);

    return () => {
      document.removeEventListener("click", hideDropdown);
    };
  }, []);

  const handleClick = () => setOpenDropdown(!openDropdown);

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
