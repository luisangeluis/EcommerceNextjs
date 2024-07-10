import { useState } from "react";
import styles from "./DropDown.module.scss";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";

const DropDown = ({ customClass }) => {
  const handleClick = () => console.log("click");

  return (
    <article className={styles.DropDownContainer}>
      <div className={styles.DropDownBody}>
        <ul className={styles.list}>
          <li>
            <BtnCustom onClick={handleClick} customClass={`${customClass}`}>
              Log out
            </BtnCustom>
          </li>
          <li>opcion 2</li>
        </ul>
      </div>
    </article>
  );
};

export default DropDown;
