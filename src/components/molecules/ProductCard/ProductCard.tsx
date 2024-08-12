"use client";

import type { Product } from "@/types";
import styles from "./ProductCard.module.scss";

import Image from "next/image";
import { useRouter } from "next/navigation";
import firstMayusc from "@/utils/firstMayusc";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const router = useRouter();

  const handlerClick = (productId: string) =>
    router.push(`/products/${productId}`);

  return (
    <article
      className={`${styles.productCard}`}
      onClick={() => handlerClick(product.id)}
    >
      <Image
        alt={"default-image"}
        src={
          product.productImage.length > 0
            ? `${product.productImage[0].url}`
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
        }
        width={1000}
        height={1000}
      />
      <div className={`${styles.cardBody}`}>
        <h3>{firstMayusc(product.title)}</h3>
        <p>{firstMayusc(product.description)}</p>
        <p>{product.price}</p>
      </div>
    </article>
  );
};

export default ProductCard;
