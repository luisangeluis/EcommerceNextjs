"use client";

import { useEffect, useState } from "react";
//REDUX
import { useDispatch, useSelector } from "react-redux";

//STYLES
import styles from "@/styles/home.module.scss";
//COMPONENTS
import Loader from "@/components/molecules/Loader/Loader";
import Products from "@/components/organisms/Products/Products";
import Backdrop from "@/components/atoms/Backdrop/Backdrop";
import BrowserProducts from "@/components/organisms/BrowserProducts/BrowserProducts";
import { getProducts } from "@/store/slices/productsSlice";
import ListMuiCategories from "@/components/organisms/ListMuiGenres/ListMuiCategories";
import PaginationMuiProducts from "@/components/organisms/PaginationMuiProducts/PaginationMuiProducts";
import { setTermsToSearch } from "@/store/slices/termsToSearchSlice";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import ProductSearchSection from "@/components/organisms/ProductSearchSection/ProductSearchSection";
import ProductCardGroup from "@/components/organisms/ProductCardGroup/ProductCardGroup";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const termsToSearch = useSelector((state) => state.termsToSearch);

  useEffect(() => {
    console.log("termsToSearch");
    dispatch(getProducts(termsToSearch));
  }, [termsToSearch]);

  return (
    <section className={styles.homeContainer}>
      {products.isLoading && (
        <Backdrop customClass={"pFixed"}>
          <Loader />
        </Backdrop>
      )}
      <ProductSearchSection />
      <hr />
      <ProductCardGroup />

      <section className={styles.paginationSection}>
        <PaginationMuiProducts />
      </section>
    </section>
  );
}
