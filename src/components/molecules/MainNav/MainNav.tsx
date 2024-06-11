"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@/store/slices/cartSlice";
import { clearUser, getUser } from "@/store/slices/userSlice";

//Fontawesome
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Styles
import styles from "./MainNav.module.scss";

//Components
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";

const MainNav = ({ customClass }) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (typeof window !== undefined) {
      const currentToken = localStorage.getItem("ecoUserToken");
      console.log({ currentToken });

      if (!user.id && currentToken !== "" && currentToken !== null) {
        console.log("getting user");

        dispatch(getUser(currentToken));
      }
    }
  }, []);

  const logoutUser = () => {
    localStorage.setItem("ecoUserToken", "");
    dispatch(clearUser());
  };

  const handlerClick = () => {
    if (!user) {
      router.push("/login");
    } else if (pathname === "/cart") {
      dispatch(setCart({ isClosed: true }));
    } else {
      dispatch(setCart({ isClosed: false }));
    }
  };

  const getNav = (user, pathname: string) => {
    if (!user.id) {
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
          <div>
            <p>Hola {user.firstName}</p>
            <BtnCustom onClick={logoutUser} customClass={`btn btnBlack`}>
              Log out
            </BtnCustom>
          </div>
          {cart.isClosed && (
            <BtnCustom onClick={handlerClick} customClass={"btnWhite"}>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="fa-solid fa-cart-shopping"
              />
            </BtnCustom>
          )}
        </>
      );
    }
  };

  return (
    <nav className={`${styles.mainNav} ${styles[customClass]}`}>
      {getNav(user, pathname)}
    </nav>
  );
};

export default MainNav;
