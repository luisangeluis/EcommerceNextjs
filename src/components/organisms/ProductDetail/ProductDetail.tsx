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

  console.log(product);

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
          <li>
            <Image src={product.productImage[0].url} width={600} height={600} />
          </li>
          <li>
            <Image src={product.productImage[0].url} width={400} height={400} />
          </li>
          <li>
            <Image src={product.productImage[0].url} width={400} height={400} />
          </li>
          {/* <li>
            <Image src={product.productImage[0].url} width={400} height={400} />
          </li>
          <li>
            <Image src={product.productImage[0].url} width={400} height={400} />
          </li>
          <li>
            <Image src={product.productImage[0].url} width={400} height={400} />
          </li>
          <li>
            <Image src={product.productImage[0].url} width={400} height={400} />
          </li> */}
          {/* {product.productImage.map((image) => (
            <li key={image.id}>
              <Image src={image.url} width={100} height={100} />
            </li>
          ))} */}
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
