"use client";

import useGetToken from "@/hooks/useGetToken";
import styles from "./MainNav.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const MainNav = () => {
  const cart = useSelector((state) => state.cart);
  //   const userToken = useGetToken();
  const pathname = usePathname();
  const [user, setUser] = useState();
  let currenToken = "";

  useEffect(() => {
    if (currenToken) {
      getUser(currenToken);
    }
  }, [currenToken]);

  if (typeof window !== undefined) {
    currenToken = localStorage.getItem("ecoUserToken")!;
  }

  const getUser = async (token: string) => {
    return await fetch(`${apiUrl}/api/v1/users/my-user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res.response);
      });
  };

  const getNav = (user, pathname) => {
    if (!user) {
      return (
        <ul>
          {pathname !== "/login" && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          {pathname !== "/register" && (
            <li>
              <Link href="/register">Register</Link>
            </li>
          )}
        </ul>
      );
    } else {
      return (
        <>
          <p>Hola {user.firstName}</p>
          <button className={``} onClick={handlerClick}>
            CART
          </button>
        </>
      );
    }
  };

  return (
    <nav className={styles.mainNav}>
      {
        /* {cart.isClosed && (
        <button className={``} onClick={handlerClick}>
          CART
        </button>
      )} */
        getNav(user, pathname)
      }
    </nav>
  );
};

export default MainNav;
