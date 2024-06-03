"use client";
import { useState } from "react";
import Link from "next/link";

//Fontawesome
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Styles
import styles from "./Header.module.scss";

//Components
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import MainNav from "@/components/molecules/MainNav/MainNav";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className={`${styles.header}`}>
      <div className={styles.headerHeader}>
        <h1 className={`titleOne`}>
          <Link href={"/"}>Ecommerce</Link>
        </h1>
        <BtnCustom onClick={() => setOpenNav(!openNav)}>
          <FontAwesomeIcon icon={faBars} className="fa-solid fa-bars" />
        </BtnCustom>
      </div>
      <MainNav customClass={openNav && "height0"} />
    </header>
  );
};

export default Header;
