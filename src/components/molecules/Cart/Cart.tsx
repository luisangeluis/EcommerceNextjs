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
        <div className={`${styles.cartBody}`}>
          {!cart.isLoading && (
            <>
              <BtnCustom onClick={handlerClick} customClass={"btnDark"}>
                Close
              </BtnCustom>
              <h3>Cart</h3>
              <h3>Subtotal: ${subTotal}</h3>
              <Link href={"/cart"}>Go to cart</Link>
            </>
          )}
          {showCartItems(cart.data?.cartItems)}
        </div>
      </>
    </aside>
  );
};

export default Cart;
