import ProductMain from "@/components/organisms/ProductMain/ProductMain";
import styles from "@/styles/home.module.scss";

export default async function Home() {
  return (
    <main className={styles.container}>
      <ProductMain />

    </main>
  );
}
