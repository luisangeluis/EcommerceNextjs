import styles from "./product.module.scss";
import ProductDetail from "@/components/organisms/ProductDetail/ProductDetail";

const apiUrl = process.env.API_URL;

interface ProductProps {
  params: {
    id: string;
  };
}

const product = async ({ params }: ProductProps) => {
  const product = await getProduct(params.id);

  return (
    <section className={styles.product}>
      <h1>Detail Product</h1>
      <ProductDetail product={product.response} />
    </section>
  );
};

const getProduct = async (productId: string) => {
  const response = await fetch(`${apiUrl}/api/v1/products/${productId}`);
  const data = await response.json();

  return data;
};

export default product;
