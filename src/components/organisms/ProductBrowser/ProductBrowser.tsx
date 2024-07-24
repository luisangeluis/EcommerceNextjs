"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/store/slices/productsSlice";
//STYLES
import styles from "./ProductBrowser.module.scss";
//COMPONENTS
import ProductInput from "@/components/molecules/ProductInput/ProductInput";
import GenreForm from "@/components/organisms/GenreForm/GenreForm";
import Backdrop from "@/components/atoms/Backdrop/Backdrop";
import Loader from "@/components/molecules/Loader/Loader";
import Products from "../Products/Products";
import CustomPagination from "@/components/molecules/CustomPagination/CustomPagination";

const ProductBrowser = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [termsToSearch, setTermsToSearch] = useState({});

  useEffect(() => {
    dispatch(getProducts(termsToSearch));
  }, [termsToSearch]);

  return (
    <section className={styles.productBrowser}>
      {products.isLoading && (
        <Backdrop customClass={"pFixed"}>
          <Loader />
        </Backdrop>
      )}
      <section>
        <GenreForm setTermsToSearch={setTermsToSearch} />
        <ProductInput setTermsToSearch={setTermsToSearch} termsToSearch={termsToSearch}/>
      </section>
      {products.products.length > 0 && (
        <Products products={products.products} />
      )}
      {products.totalPages > 0 && (
        <CustomPagination totalPages={products.totalPages} />
      )}

    </section>
  );
};

export default ProductBrowser;
