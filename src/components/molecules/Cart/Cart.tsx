"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, getCart } from "@/store/slices/cartSlice";
import styles from "./Cart.module.scss";
import Link from "next/link";
import useGetToken from "@/hooks/useGetToken";
//Components
import Loader from "@/components/molecules/Loader/Loader";
import CartItem from "@/components/molecules/CartItem/CartItem";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const userToken = useGetToken();
  const dispatch = useDispatch();
  const [subTotal, setSubtotal] = useState(0);
  // console.log(cart);
  useEffect(() => {
    if (!cart.isClosed && userToken) {
      dispatch(getCart(userToken));
    }
  }, [cart.isClosed]);

  // useEffect(() => {
  //   if (!cart.isClosed && userToken) {
  //     dispatch(getCart(userToken));
  //   }
  // }, [userToken]);

  useEffect(() => {
    if (!cart.isClosed) {
      let sum = cart.data.cartItems?.reduce(
        (accum, cartItem) => accum + cartItem.quantity * cartItem.product.price,
        0,
      );
      setSubtotal(sum);
    }
  }, [cart]);

  const handlerClick = () => dispatch(clearCart());

  const showCartItems = (items: []) => {
    if (items?.length > 0)
      return items.map((item) => <CartItem item={item} key={item.id} />);
  };

  return (
    <aside className={`${styles.cart} ${cart.isClosed && styles.isClosed}`}>
      <>
        {cart.isLoading && <Loader />}
        <div className={styles.cartHeader}>
          {!cart.isLoading && (
            <>
              <BtnCustom onClick={handlerClick} customClass={"btnBorderDark"}>
                Close
              </BtnCustom>
              <h3 className={`titleFour`}>Subtotal</h3>
              <p>{`$${subTotal}.00`}</p>
              <BtnCustom
                onClick={() => router.push("/cart")}
                customClass={"btnDark"}
              >
                Go to cart
              </BtnCustom>
            </>
          )}
        </div>
        <div className={`${styles.cartBody}`}>
          <article className={`${styles.cartItemsContainer}`}>
            {showCartItems(cart.data?.cartItems)}
          </article>
        </div>
      </>
    </aside>
  );
};

export default Cart;
