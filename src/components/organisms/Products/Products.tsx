import { useEffect } from "react";
//REDUX
import { useDispatch } from "react-redux";
import { getProducts } from "@/store/slices/productsSlice";
// TYPES
import { Product } from "@/types";
//STYLES
import styles from "./Products.module.scss";
//COMPONENTS
import ProductCard from "@/components/molecules/ProductCard/ProductCard";

const Products = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <section className={styles.productsContainer}>
      <section className={styles.products}>
        {products.length > 0 &&
          products.map((product: Product, i: number) => (
            <ProductCard product={product} key={i} />
          ))}
      </section>
    </section>
  );
};

export default Products;
