"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, setCart } from "@/store/slices/cartSlice";
import styles from "./ProductDetail.module.scss";

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
      <div className={styles.detailImages}>
        <ul className={styles.list}>
          {product.productImage.length > 0 ? (
            <>
              <li>
                <Image
                  src={product.productImage[0].url}
                  width={300}
                  height={400}
                  alt=""
                />
              </li>
              <li>
                <Image
                  src={product.productImage[0].url}
                  width={300}
                  height={400}
                  alt=""
                />
              </li>
              <li>
                <Image
                  src={product.productImage[0].url}
                  width={300}
                  height={400}
                  alt=""
                />
              </li>
            </>
          ) : (
            <li>
              <Image
                alt={"default-image"}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                }
                width={300}
                height={300}
              />
            </li>
          )}
        </ul>
      </div>
      <div className={`${styles.detailBody}`}>
        <h2>{product.title}</h2>
        <p>Acerca de este articulo</p>
        <p>{product.description}</p>
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
