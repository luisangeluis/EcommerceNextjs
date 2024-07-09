import { useState } from "react";
import styles from "./Avatar.module.scss";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
// import DropDown from "../DropDown/DropDown";
import Dropdown from "@mui/joy/Dropdown";
import { MenuItem } from "@mui/material";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import DropDown from "../DropDown/DropDown";

const Avatar = ({ name, onClick, customClass }) => {
  return (
    <article className={styles.avatarContainer}>
      <DropDown name={name} onClick={onClick} customClass={customClass} />
    </article>
  );
};

export default Avatar;
