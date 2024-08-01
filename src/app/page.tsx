"use client";
//STYLES
import styles from "@/styles/home.module.scss";
//COMPONENTS
import ProductBrowser from "@/components/organisms/ProductBrowser/ProductBrowser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "@/store/slices/productsSlice";
import Loader from "@/components/molecules/Loader/Loader";
import GenreForm from "@/components/organisms/GenreForm/GenreForm";
import Products from "@/components/organisms/Products/Products";
import CustomPagination from "@/components/molecules/CustomPagination/CustomPagination";
import Backdrop from "@/components/atoms/Backdrop/Backdrop";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [termsToSearch, setTermsToSearch] = useState({
    page: 1,
    productInfo: "",
    categoryId: "",
  });

  useEffect(() => {
    dispatch(getProducts(termsToSearch));
  }, [termsToSearch]);

  const clearTerms = () =>
    setTermsToSearch({ page: 1, productInfo: "", categoryId: "" });

  return (
    <section className={styles.homeContainer}>
      {products.isLoading && (
        <Backdrop customClass={"pFixed"}>
          <Loader />
        </Backdrop>
      )}

      <section className={styles.browserSection}>
        <ProductBrowser
          termsToSearch={termsToSearch}
          setTermsToSearch={setTermsToSearch}
        />
        {products.totalResults > 0 && (
          <GenreForm
            setTermsToSearch={setTermsToSearch}
            termsToSearch={termsToSearch}
          />
        )}
        {products.products.length === 0 && (
          <BtnCustom customClass={"btnBorderBlack"} onClick={clearTerms}>
            Clear all
          </BtnCustom>
        )}
      </section>
      {products.products.length > 0 && (
        <Products products={products.products} />
      )}

      {products.totalPages > 0 && (
        <CustomPagination
          totalPages={products.totalPages}
          termsToSearch={termsToSearch}
          setTermsToSearch={setTermsToSearch}
        />
      )}
    </section>
  );
}
