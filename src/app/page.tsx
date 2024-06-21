//Types
import type { Product } from "@/types";

//Styles
import styles from "@/styles/home.module.scss";

//Components
import Products from "@/components/organisms/Products/Products";

export default async function Home() {
  return (
    <section className={`${styles.homeContainer}`}>
      <Products />
    </section>
  );
}
