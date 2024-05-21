import type { Product } from "@/types";
import styles from "@/styles/home.module.scss";
import ProductCard from "@/components/molecules/ProductCard/ProductCard";

const apiUrl = process.env.API_URL;

export default async function Home() {
  const products = await getProducts();

  return (
    <section className={`${styles.homeContainer}`}>
      {products.products.map((product: Product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </section>
  );
}

const getProducts = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/v1/products`);

    return await response.json();
  } catch (error: any) {
    console.log(error.message);
  }
};
