import { useState } from "react";
import styles from "./DropDown.module.scss";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import Link from "next/link";
//
import SubTitle2 from "@/components/atoms/SubTitle2/SubTitle2";
import firstMayusc from "@/utils/firstMayusc";

const DropDown = ({ customClass, userName, list, onClick }) => {
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
              <li key={i}>
                <Link
                  href={`/${e.route}`}
                  style={{
                    backgroundColor: "var(--colorSix)",
                    borderRadius: "5px",
                    padding: ".5rem",
                    fontWeight: "bold",
                    display: "block",
                  }}
                >{`${e.displayName}`}</Link>
              </li>
            );
          })}
        </ul>
        <BtnCustom onClick={onClick} customClass={customClass}>
          Log out
        </BtnCustom>
      </div>
    </article>
  );
};

export default DropDown;
