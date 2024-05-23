"use client";

import useGetToken from "@/hooks/useGetToken";
import styles from "./MainNav.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Link from "next/link";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const MainNav = () => {
  const cart = useSelector((state) => state.cart);
  const userToken = useGetToken();
  const [user, setUser] = useState();

  useEffect(() => {
    if (userToken) {
      getUser(userToken);
    }
  }, [userToken]);

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

  return (
    <nav className={styles.mainNav}>
      {!user ? (
        <ul>
          {/* {pathname !== "/login" && ( */}
          <li>
            <Link href="/login">Login</Link>
          </li>
          {/* )} */}
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      ) : (
        <>
          <p>Hola {user.firstName}</p>
          <button className={``} onClick={handlerClick}>
            CART
          </button>
        </>
      )}
      {/* {cart.isClosed && (
        <button className={``} onClick={handlerClick}>
          CART
        </button>
      )} */}
    </nav>
  );
};

export default MainNav;
