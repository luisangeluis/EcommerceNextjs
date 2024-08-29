import ProductCard from "@/components/molecules/ProductCard/ProductCard";
import { useSelector } from "react-redux";

const ProductCardGroup = () => {
  const products = useSelector((state) => state.products);

  return (
    <section>
      {products.products.map((product, i: number) => (
        <ProductCard product={product} key={i} />
      ))}
    </section>
  );
};

export default ProductCardGroup;
