"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, getCart } from "@/store/slices/cartSlice";
import styles from "./Cart.module.scss";
import useGetToken from "@/hooks/useGetToken";

//Fontawesome
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import Loader from "@/components/molecules/Loader/Loader";
import CartItem from "@/components/molecules/CartItem/CartItem";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
// import CustomIcon from "@/components/atoms/CustomIcon/CustomIcon";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const userToken = useGetToken();
  const dispatch = useDispatch();
  const [subTotal, setSubtotal] = useState(0);

  useEffect(() => {
    if (!cart.isClosed && userToken) {
      dispatch(getCart(userToken));
    }
  }, [cart.isClosed]);

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
    <aside
      className={`${styles.cart} ${cart.isClosed && styles.isClosed} ${!cart.isClosed && styles.isOpened}`}
    >
      <>
        {cart.isLoading && <Loader />}
        <div className={styles.cartHeader}>
          {!cart.isLoading && (
            <>
              {/* <div>
                <button onClick={handlerClick}>
                  <FontAwesomeIcon icon={faX} className="fa-solid fa-x" />
                </button>
              </div> */}
              {/* <button className="btn btnTwo" onClick={handlerClick}>
                <CustomIcon icon={faX} iconClass={"fa-solid fa-x"}></CustomIcon>
              </button> */}
              <BtnCustom onClick={handlerClick}>
                <FontAwesomeIcon icon={faX} className="fa-solid fa-x" />
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
