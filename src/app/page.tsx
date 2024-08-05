"use client";

import { useEffect, useState } from "react";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/store/slices/productsSlice";
//STYLES
import styles from "@/styles/home.module.scss";
//COMPONENTS
import ProductBrowser from "@/components/organisms/ProductBrowser/ProductBrowser";
import Loader from "@/components/molecules/Loader/Loader";
import GenreForm from "@/components/organisms/GenreForm/GenreForm";
import Products from "@/components/organisms/Products/Products";
import CustomPagination from "@/components/molecules/CustomPagination/CustomPagination";
import Backdrop from "@/components/atoms/Backdrop/Backdrop";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [showBtnClear, setShowBtnClear] = useState(false);
  const [termsToSearch, setTermsToSearch] = useState({
    page: 1,
    productInfo: "",
    categoryId: "",
  });

  useEffect(() => {
    dispatch(getProducts(termsToSearch));
  }, [termsToSearch]);

  const clearTerms = () =>{
    setShowBtnClear(false);
    setTermsToSearch({ page: 1, productInfo: "", categoryId: "" });
  }

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
          setShowBtnClear={setShowBtnClear}
        />
        {products.totalResults > 0 && (
          <GenreForm
            setTermsToSearch={setTermsToSearch}
            termsToSearch={termsToSearch}
            setShowBtnClear={setShowBtnClear}
          />
        )}
        
        {showBtnClear === true && (
          <BtnCustom customClass={"btnBorderBlack"} onClick={clearTerms}>
            Clear all
          </BtnCustom>
        )}
        
      </section>
      {products.products.length > 0 ? (
        <Products products={products.products} />
      ):<h2>Not found results</h2>}
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
