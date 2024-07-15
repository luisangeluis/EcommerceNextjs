import { useState } from "react";
import styles from "./DropDown.module.scss";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import Link from "next/link";

const DropDown = ({ customClass, userName, list }) => {
  const handleClick = () => console.log("click");

  return (
    <article className={styles.DropDownContainer}>
      <div className={styles.DropDownBody}>
        <p>User:{userName}</p>
        <BtnCustom onClick={handleClick} customClass={customClass}>
          Log out
        </BtnCustom>
        <ul className={styles.list}>
          {list.map((e, i) => {
            return (
              <li key={i}>
                <Link href={`/${e.route}`}>{`${e.displayName}`}</Link>
              </li>
            );
          })}
          {/*<li>opcion 2</li>*/}
        </ul>
      </div>
    </article>
  );
};

export default DropDown;
