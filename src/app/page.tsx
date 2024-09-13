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
import ProductCardGroup from "@/components/organisms/ProductCardGroup/ProductCardGroup";
import Browser from "@/components/molecules/Browser/Browser";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const termsToSearch = useSelector((state) => state.termsToSearch);

  const [showBtnClear, setShowBtnClear] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("termsToSearch");
    dispatch(getProducts(termsToSearch));

    if (termsToSearch.productInfo || termsToSearch.categoryId) {
      setShowBtnClear(true);
    } else {
      setShowBtnClear(false);
    }
  }, [termsToSearch]);

  const clearTerms = () =>
    dispatch(
      setTermsToSearch({
        page: 1,
        productInfo: "",
        categoryId: "",
      })
    );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = (value) => {
    if (value) dispatch(setTermsToSearch({ productInfo: value }));
  };

  return (
    <section className={styles.homeContainer}>
      {products.isLoading && (
        <Backdrop customClass={"pFixed"}>
          <Loader />
        </Backdrop>
      )}
      <div>
        <Browser
          value={inputValue}
          onChange={handleChange}
          btnText="Search"
          placeholder="Type a product"
          btnCustomClass="btnThree"
          onClick={handleClick}
        />
        <ListMuiCategories />
        {showBtnClear === true && (
          <BtnCustom onClick={clearTerms} customClass={"btnBorderBlack"}>
            Clear all
          </BtnCustom>
        )}
      </div>
      <hr />
      <ProductCardGroup />

      <section className={styles.paginationSection}>
        <PaginationMuiProducts />
      </section>
    </section>
  );
}
