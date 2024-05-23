"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@/store/slices/cartSlice";
import useGetToken from "@/hooks/useGetToken";
import styles from "./Header.module.scss";
import MainNav from "../MainNav/MainNav";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log({ pathname });

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // const [userToken] = useGetToken();
  const [user, setUser] = useState();

  // useEffect(() => {
  //   if (userToken) getUser(userToken);
  // }, [userToken]);

  // const handlerClick = () => {
  //   if (!userToken) {
  //     router.push("/login");
  //   } else if (pathname === "/cart") {
  //     dispatch(setCart({ isClosed: true, isLoading: false }));
  //   } else {
  //     dispatch(setCart({ isClosed: false, isLoading: true }));
  //   }
  // };

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
