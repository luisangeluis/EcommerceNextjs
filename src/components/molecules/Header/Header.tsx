"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@/store/slices/cartSlice";
import useGetToken from "@/hooks/useGetToken";
import styles from "./Header.module.scss";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [userToken] = useGetToken();
  const [user, setUser] = useState();

  useEffect(() => {
    if (userToken) getUser(userToken);
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

  const handlerClick = () => {
    if (!userToken) {
      router.push("/user/login");
    } else if (pathname === "/cart") {
      dispatch(setCart({ isClosed: true, isLoading: false }));
    } else {
      dispatch(setCart({ isClosed: false, isLoading: true }));
    }
  };

  return (
    <header className={`${styles.header}`}>
      <h1>
        <Link href={"/"}>Ecommerce</Link>
      </h1>
      <nav className={styles.nav}>
        {!user ? (
          <ul>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        ) : (
          <p>Hola {user.firstName}</p>
        )}
        {cart.isClosed && (
          <button className={``} onClick={handlerClick}>
            CART
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
