"use client";
import { useEffect, useRef, useState } from "react";
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
  const [showToggle, setShowToggel] = useState(false);
  const screenWidth = useRef(0);

  useEffect(() => {
    screenWidth.current = getSizeWidth();
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSizeWidth = () => {
    let screenWidth = 0;
    if (typeof window !== "undefined") {
      screenWidth = window.innerWidth;
    }

    return screenWidth;
  };

  const handleResize = () => {
    screenWidth.current = getSizeWidth();

    if (screenWidth.current > 992) {
      setShowToggel(false);
      setOpenNav(true);
    } else {
      setShowToggel(true);
      setOpenNav(false);
    }
  };

  return (
    <header className={`${styles.header}`}>
      <div className={styles.headerHeader}>
        <h1 className={`titleOne`}>
          <Link href={"/"}>Ecommerce</Link>
        </h1>
        {showToggle && (
          <BtnCustom onClick={() => setOpenNav(!openNav)}>
            <FontAwesomeIcon icon={faBars} className="fa-solid fa-bars" />
          </BtnCustom>
        )}
      </div>
      {openNav && <MainNav />}
    </header>
  );
};

export default Header;
