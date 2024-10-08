"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, setCart } from "@/store/slices/cartSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
//STYLES
import styles from "./ProductDetail.module.scss";
//COMPONENTS
import SubTitle1 from "@/components/atoms/SubTitle1/SubTitle1";
import SubTitle2 from "@/components/atoms/SubTitle2/SubTitle2";
import firstMayusc from "@/utils/firstMayusc";

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
    const currentToken = localStorage.getItem("ecoUserToken");

    if (!currentToken) router.push("/login");
    else {
      if (cart.isClosed) dispatch(setCart({ isClosed: false }));

      dispatch(addProductToCart(currentToken, product.id));
    }
  };

  return (
    <article className={`${styles.productDetail} p-2`}>
      <div className={styles.imagesDetail}>
        {product.productImage.length > 0 && (
          <ul className={styles.list}>
            {product.productImage.map((image, i) => {
              return (
                <li key={i}>
                  <button onClick={() => handlerClickSelectedImage(image)}>
                    <Image
                      src={image.url}
                      width={500}
                      height={500}
                      alt={"hola"}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
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
        <article className={styles.detailBodyCard}>
          <div className={styles.detailBodyHeader}>
            <h5 className="font-semibold">{firstMayusc(product.title)}</h5>
          </div>

          <div className={styles.detailBodyMain}>
            <h4 className="font-bold">About this article.</h4>

            <p>{firstMayusc(product.description)}</p>
          </div>

          <div className={`${styles.detailBodyFooter} `}>
            <h3 className={`font-semibold`}>${product.price}</h3>
            <button
              className={`bg-emerald-500 p-2 rounded`}
              onClick={() => handlerClickAddToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </article>
      </div>
    </article>
  );
};

export default ProductDetail;
