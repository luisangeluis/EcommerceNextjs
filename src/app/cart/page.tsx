"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getCart, setCart } from "@/store/slices/cartSlice";
//import { setAlert } from "@/store/slices/alertSlice";
//STYLES
import styles from "./cartDetail.module.scss";
//COMPONENTS
import CartItemDetail from "@/components/molecules/CartItemDetail/CartItemDetail";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";

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
    // user ? dispatch(getCart(userToken)) : router.push("/login");
  }, []);

  const makeOrder = () => {
    let currentToken = "";
    //if (typeof window !== undefined) {
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
        //dispatch(setAlert(res.message));
        setTimeout(() => {
          router.push("/my-purchases");
          //dispatch(setAlert(""));
        }, 3000);
      })
      .catch((error) => console.log(error));
    //}
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
            {/*<button onClick={makeOrder}>*/}
            <BtnCustom customClass={"btnBorderBlack"} onClick={makeOrder}>
              Proceed to payment
            </BtnCustom>
            {/*</button>*/}
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
