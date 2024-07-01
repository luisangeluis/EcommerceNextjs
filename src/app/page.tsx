//TYPES
import type { Product } from "@/types";
//STYLES
import styles from "@/styles/home.module.scss";
//COMPONENTS
import Products from "@/components/organisms/Products/Products";
import ProductFinder from "@/components/molecules/ProductFinder/ProductFinder";

export default async function Home() {
  return (
    <section className={`${styles.homeContainer}`}>
      <ProductFinder />
      <Products />
    </section>
  );
}
