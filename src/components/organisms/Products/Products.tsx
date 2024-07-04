//REDUX
// TYPES
import { Product } from "@/types";
//STYLES
import styles from "./Products.module.scss";
//COMPONENTS
import ProductCard from "@/components/molecules/ProductCard/ProductCard";

const Products = ({ products }) => {
  return (
    <section className={styles.productsContainer}>
      <section className={styles.products}>
        {products.map((product: Product, i: number) => (
          <ProductCard product={product} key={i} />
        ))}
      </section>
    </section>
  );
};

export default Products;
