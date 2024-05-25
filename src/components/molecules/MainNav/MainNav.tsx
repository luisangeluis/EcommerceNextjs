"use client";

import useGetToken from "@/hooks/useGetToken";
import styles from "./MainNav.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { setCart } from "@/store/slices/cartSlice";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const MainNav = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const userToken = useGetToken();
  const pathname = usePathname();
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
      router.push("/login");
    } else if (pathname === "/cart") {
      dispatch(setCart({ isClosed: true, isLoading: false }));
    } else {
      dispatch(setCart({ isClosed: false, isLoading: true }));
    }
  };

  const getNav = (user, pathname: string) => {
    if (!user) {
      return (
        <ul>
          {pathname !== "/login" && (
            <li>
              <Link
                href="/login"
                className={`${styles.login} inline-block my-2 lg:my-0 px-4  py-3 lg:py-2 rounded-md `}
              >
                Login
              </Link>
            </li>
          )}
          {pathname !== "/register" && (
            <li>
              <Link
                href="/register"
                className={`${styles.register} inline-block my-2 lg:my-0 px-4  py-3 lg:py-2 rounded-md`}
              >
                Register
              </Link>
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

  return <nav className={styles.mainNav}>{getNav(user, pathname)}</nav>;
};

export default MainNav;
