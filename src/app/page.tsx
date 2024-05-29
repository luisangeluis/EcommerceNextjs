//Types
import type { Product } from "@/types";

//Styles
import styles from "@/styles/home.module.scss";

//Fontawesome example
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";

//Components
import ProductCard from "@/components/molecules/ProductCard/ProductCard";

const apiUrl = process.env.API_URL;

export default async function Home() {
  const products = await getProducts();

  return (
    <section className={`${styles.homeContainer}`}>
      {/* <FontAwesomeIcon
        icon={faCheck}
        className="fas fa-check"
        style={{ color: "red", fontSize: 64 }}
      /> */}
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
