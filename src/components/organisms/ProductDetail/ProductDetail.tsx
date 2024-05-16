"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, setCart } from "@/store/slices/cartSlice";
import useGetToken from "@/hooks/useGetToken";
import styles from "./ProductDetail.module.scss";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ProductDetail = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.userToken);
  const cart = useSelector((state) => state.cart);

  const handlerClickAddToCart = (product) => {
    if (!userToken) router.push("/user/login");
    else {
      if (cart.isClosed) dispatch(setCart({ isClosed: false }));

      dispatch(addProductToCart(userToken, product.id));
    }
  };

  return (
    <article className={`${styles.productDetail} p-2`}>
      <div className={styles.detailImages}>images</div>
      <div className={`${styles.detailBody}`}>
        <h2>Name: {product.title}</h2>
        <p>Description: {product.description}</p>
        <h3>${product.price}</h3>
        <button
          className={`bg-emerald-500 p-2 rounded`}
          onClick={() => handlerClickAddToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductDetail;
