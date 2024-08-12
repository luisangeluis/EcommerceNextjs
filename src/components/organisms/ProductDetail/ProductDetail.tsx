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
        <ul className={styles.list}>
          {product.productImage.length > 0 &&
            product.productImage.map((image, i) => {
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
        <div className={styles.detailBodyHeader}>
          <h5>{product.title}</h5>
        
        </div>
        
        <div className={styles.detailBodyMain}>
          <h6>Acerca de este articulo.</h6>
          <p>{product.description}</p>
        
          <h3>${product.price}</h3>
        </div>
        
        <div className={`${styles.detailBodyFooter} `}>
          <button
            className={`bg-emerald-500 p-2 rounded text-right`}
            onClick={() => handlerClickAddToCart(product)}
          >
            Add to cart
          </button>
        </div>

      </div>
    </article>
  );
};

export default ProductDetail;
