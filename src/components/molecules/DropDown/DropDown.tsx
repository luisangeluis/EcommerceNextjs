import { useState } from "react";
import styles from "./DropDown.module.scss";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import Link from "next/link";
//
import SubTitle2 from "@/components/atoms/SubTitle2/SubTitle2";
import firstMayusc from "@/utils/firstMayusc";

const DropDown = ({ customClass, userName, list }) => {
  const handleClick = () => console.log("click");

  return (
    <article className={`${styles.DropDownContainer} ${styles.fadeIn}`}>
      <div className={styles.DropDownBody}>
        <p
          className="font-semibold"
          style={{
            backgroundColor: "var(--colorFour)",
            color: "var(--colorWhite)",
          }}
        >
          Hola {firstMayusc(userName)}
        </p>
        <ul className={styles.list}>
          {list.map((e, i) => {
            return (
              <li
                key={i}
                style={{
                  backgroundColor: "var(--colorSix)",
                  borderRadius: "5px",
                  padding: ".5rem",
                  fontWeight: "bold",
                }}
              >
                <Link href={`/${e.route}`}>{`${e.displayName}`}</Link>
              </li>
            );
          })}
        </ul>
        <BtnCustom onClick={handleClick} customClass={customClass}>
          Log out
        </BtnCustom>
      </div>
    </article>
  );
};

export default DropDown;
