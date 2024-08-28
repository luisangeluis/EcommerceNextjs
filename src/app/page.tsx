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

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const termsToSearch = useSelector((state) => state.termsToSearch);
  const [showBtnClear, setShowBtnClear] = useState(false);

  useEffect(() => {
    dispatch(getProducts(termsToSearch));
  }, [termsToSearch]);

  useEffect(() => {
    if (termsToSearch.productInfo || termsToSearch.categoryId)
      setShowBtnClear(true);
    else setShowBtnClear(false);
  }, [termsToSearch]);

  const handleClick = () =>
    dispatch(
      setTermsToSearch({
        page: 1,
        productInfo: "",
        categoryId: "",
      }),
    );

  return (
    <section className={styles.homeContainer}>
      {products.isLoading && (
        <Backdrop customClass={"pFixed"}>
          <Loader />
        </Backdrop>
      )}
      <section className={styles.searchSection}>
        <BrowserProducts />
        <ListMuiCategories />
        {showBtnClear === true && (
          <BtnCustom onClick={handleClick} customClass={"btnBorderBlack"}>
            Clear all
          </BtnCustom>
        )}
      </section>
      <hr />
      {products.products.length > 0 ? (
        <Products products={products.products} />
      ) : (
        <h2 className="grow">{products.message}</h2>
      )}
      {products.products.length > 0 && (
        <section className={styles.paginationSection}>
          <PaginationMuiProducts />
        </section>
      )}
    </section>
  );
}
