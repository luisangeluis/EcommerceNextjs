import styles from "./ProductBrowser.module.scss";
import ProductInput from "@/components/molecules/ProductInput/ProductInput";
import FormControl from "@mui/material/FormControl";
import GenreForm from "@/components/organisms/GenreForm/GenreForm";

const ProductBrowser = () => {
  return (
    <>
      <section className={styles.productBrowser}>
        <GenreForm />
        <ProductInput />
      </section>
      <hr style={{ border: "solid 1px var(--colorThree)" }} />
    </>
  );
};

export default ProductBrowser;
