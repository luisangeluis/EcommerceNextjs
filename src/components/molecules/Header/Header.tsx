"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// import { setCart } from "@/store/slices/cartSlice";
// import useGetToken from "@/hooks/useGetToken";
import styles from "./Header.module.scss";
import MainNav from "../MainNav/MainNav";

const Header = () => {
  // const router = useRouter();
  // const pathname = usePathname();

  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);
  // const [userToken] = useGetToken();
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   if (userToken) getUser(userToken);
  // }, [userToken]);

  return (
    <header className={`${styles.header}`}>
      <h1>
        <Link href={"/"}>Ecommerce</Link>
      </h1>
      <MainNav />
    </header>
  );
};

export default Header;
