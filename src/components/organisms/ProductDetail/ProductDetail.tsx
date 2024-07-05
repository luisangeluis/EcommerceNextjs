"use client";

import { useEffect, useState } from "react";
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
  const [selectedImage, setSelectedImage] = useState(null);
  // console.log({ selectedImage });
  useEffect(() => {
    if (product && product.productImage.length > 0) {
      setSelectedImage({
        src: product.productImage[0]!.url,
        width: 400,
        height: 400,
        alt: "",
      });
    }
  }, []);

  const handlerClickSelectedImage = (image) => {
    setSelectedImage({
      src: image.url,
      width: 400,
      height: 400,
      alt: "",
    });
  };

  const handlerClickAddToCart = (product) => {
    if (!userToken) router.push("/login");
    else {
      if (cart.isClosed) dispatch(setCart({ isClosed: false }));

      dispatch(addProductToCart(userToken, product.id));
    }
  };

  return (
    <article className={`${styles.productDetail} p-2`}>
      <div className={styles.imagesDetail}>
        <ul className={styles.list}>
          {product.productImage.length > 0 &&
            product.productImage.map((image, i) => {
              return (
                <li key={i}>
                  <button onClick={() => handlerClickSelectedImage(image)}>
                    <Image src={image.url} width={500} height={500} alt={""} />
                  </button>
                </li>
              );
            })}
        </ul>
        <div className={styles.selectedImage}>
          {product.productImage.length ? (
            <Image
              src={selectedImage?.src}
              width={selectedImage?.width}
              height={selectedImage?.height}
              alt={selectedImage?.alt}
            />
          ) : (
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
              }
              width={400}
              height={400}
              alt="default-image"
            />
          )}
        </div>
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
