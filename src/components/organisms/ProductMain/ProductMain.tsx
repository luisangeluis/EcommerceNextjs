import type { Product } from "@/types";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import styles from "./ProductMain.module.scss";

const apiUrl = process.env.API_URL;

const ProductMain = async () => {
  const products = await getProducts();

  return (
    <section className={`${styles.productMain}`}>
      {products.response.map((product: Product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </section>
  );
};

const getProducts = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/v1/products`);
    const data = await response.json();

    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export default ProductMain;
