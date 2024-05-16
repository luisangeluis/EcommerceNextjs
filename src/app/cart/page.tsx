"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getCart, setCart } from "@/store/slices/cartSlice";
import { setAlert } from "@/store/slices/alertSlice";
//Styles
import styles from "./cartDetail.module.scss";
//Components
import CartItemDetail from "@/components/molecules/CartItemDetail/CartItemDetail";
import Loader from "@/components/molecules/Loader/Loader";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const CartDetail = () => {
  const userToken = useSelector((state) => state.userToken);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(setCart({ isClosed: true }));
    userToken ? dispatch(getCart(userToken)) : router.push("/user/login");
  }, []);

  const makeOrder = (userToten) => {
    const init = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToten}`,
      },
    };

    fetch(`${apiUrl}/api/v1/cart/${cart?.id}/make-order`, init)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(getCart(userToken));
        dispatch(setAlert(res.message));
        setTimeout(() => {
          router.push("/my-purchases");
          dispatch(setAlert(""));
        }, 3000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className={styles.cartDetail}>
      <div>
        <h2>Cart detail</h2>
        {cart.data.cartItems?.length > 0 && (
          <>
            <p>
              Total: $
              {cart.data.cartItems?.reduce(
                (accum, item) => accum + item.product.price * item.quantity,
                0,
              )}
            </p>
            <button onClick={() => makeOrder(userToken)}>
              Proceed to payment
            </button>
          </>
        )}
      </div>
      <div className={styles.cartDetailBody}>
        {cart.data.cartItems?.map((item) => (
          <CartItemDetail cartItemDetail={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default CartDetail;
