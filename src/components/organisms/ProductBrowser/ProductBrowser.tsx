import styles from "./ProductBrowser.module.scss";
import ProductInput from "@/components/molecules/ProductInput/ProductInput";
import GenreForm from "@/components/organisms/GenreForm/GenreForm";
import { getProducts } from "@/store/slices/productsSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ProductBrowser = () => {
  const dispatch = useDispatch();
  const [termsToSearch, setTermsToSearch] = useState({});

  useEffect(() => {
    dispatch(getProducts(termsToSearch));
  }, [termsToSearch]);

  return (
    <section className={styles.productBrowser}>
      <GenreForm setTermsToSearch={setTermsToSearch} />

      <ProductInput setTermsToSearch={setTermsToSearch} termsToSearch={termsToSearch}/>
    </section>
  );
};

export default ProductBrowser;
