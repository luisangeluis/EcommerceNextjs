import { useState } from "react";
import styles from "./Avatar.module.scss";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import DropDown from "../DropDown/DropDown";

const Avatar = ({ name, onClick, customClass }) => {
  return (
    <article className={styles.avatarContainer}>
      <DropDown name={name} />
      {/* <button className={}>{`Hello ${name}`}</button> */}
      {/* <button onClick={() => setOpenList(!openList)}>
        <p className={styles.title}>{`Hello ${name}`}</p>
      </button> */}
      {/* {openList && (
        <DropDown name={name} />
        // <ul className={styles.list}>
        //   <li>
        //     <BtnCustom onClick={onClick} customClass={`${customClass}`}>
        //       Log out
        //     </BtnCustom>
        //   </li>
        // </ul>
      )} */}
    </article>
  );
};

export default Avatar;
