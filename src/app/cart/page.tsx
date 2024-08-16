"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getCart, setCart } from "@/store/slices/cartSlice";
//STYLES
import styles from "./cartDetail.module.scss";
//COMPONENTS
import CartItemDetail from "@/components/molecules/CartItemDetail/CartItemDetail";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import PaymentBox from "@/components/molecules/PaymentBox/PaymentBox";
import Title2 from "@/components/atoms/Title2/Title2";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const CartDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log("naciendo cartDetail");
    if (typeof window !== undefined) {
      const currentToken = localStorage.getItem("ecoUserToken");

      if (currentToken !== "" && currentToken !== null) {
        dispatch(setCart({ isClosed: true }));
        dispatch(getCart(currentToken));
      }
    }
  }, []);

  const makeOrder = () => {
    let currentToken = "";
    currentToken = localStorage.getItem("ecoUserToken");

    const init = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    };

    fetch(`${apiUrl}/api/v1/cart/make-order`, init)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          router.push("/my-purchases");
        }, 3000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className={styles.cartDetail}>
      <div className={styles.cartDetailHeader}>
        <Title2>Cart detail</Title2>
        {cart.data.cartItems?.length > 0 && (
          <PaymentBox quantity={cart.data.cartItems?.reduce(
            (accum, item) => accum + item.product.price * item.quantity,
            0,
          )} onClick={makeOrder}/>
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
