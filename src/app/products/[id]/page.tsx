import styles from "@/styles/productPage.module.scss";
//components
import ProductDetail from "@/components/organisms/ProductDetail/ProductDetail";
import Title2 from "@/components/atoms/Title2/Title2";

const apiUrl = process.env.API_URL;

interface ProductProps {
  params: {
    id: string;
  };
}

const product = async ({ params }: ProductProps) => {
  const product = await getProduct(params.id);

  return (
    <section className={styles.productPage}>
      {/* <h1>Detail Product</h1> */}
      <Title2 title={"Detail product"} />
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
