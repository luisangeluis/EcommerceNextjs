"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import MainNav from "../MainNav/MainNav";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <h1 className={styles.title}>
        <Link href={"/"}>Ecommerce</Link>
      </h1>
      <MainNav />
    </header>
  );
};

export default Header;
