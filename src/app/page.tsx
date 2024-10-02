"use client";
import { useEffect, useState } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/store/slices/productsSlice";
import { setTermsToSearch } from "@/store/slices/termsToSearchSlice";

//UTILITIES
import getCategories from "@/utils/getCategories";

//STYLES
import styles from "@/styles/home.module.scss";
//COMPONENTS
import Loader from "@/components/molecules/Loader/Loader";
import Backdrop from "@/components/atoms/Backdrop/Backdrop";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import Browser from "@/components/molecules/Browser/Browser";
import ListMui from "@/components/molecules/ListMui/ListMui";
import ProductCard from "@/components/molecules/ProductCard/ProductCard";
import PaginationMui from "@/components/molecules/CustomPagination/PaginationMui";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const termsToSearch = useSelector((state) => state.termsToSearch);

  const [showBtnClear, setShowBtnClear] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data.data))
      .catch((err) => console.log({ err }));
  }, []);

  useEffect(() => {
    console.log("termsToSearch");
    dispatch(getProducts(termsToSearch));
    //comment test
    if (termsToSearch.productInfo || termsToSearch.categoryId) {
      setShowBtnClear(true);
    } else {
      setShowBtnClear(false);
    }
  }, [termsToSearch]);

  const clearTerms = () => {
    setInputValue("");
    dispatch(
      setTermsToSearch({
        page: 1,
        productInfo: "",
        categoryId: "",
      }),
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = (value) => {
    if (value)
      dispatch(setTermsToSearch({ categoryId: "", productInfo: value }));
  };

  const setCategory = (e) => {
    dispatch(
      setTermsToSearch({
        ...termsToSearch,
        categoryId: e.target.value,
        page: 1,
      }),
    );
  };

  const setPage = (e, value) => {
    dispatch(setTermsToSearch({ ...termsToSearch, page: value }));
  };

  return (
    <section className={styles.homeContainer}>
      {products.isLoading && (
        <Backdrop customClass={"pFixed"}>
          <Loader />
        </Backdrop>
      )}
      <section className={styles.searchSection}>
        <Browser
          value={inputValue}
          onChange={handleChange}
          btnText="Search"
          placeholder="Type a product"
          btnCustomClass="btnThree"
          onClick={handleClick}
        />
        <ListMui
          label="Categories"
          items={categories}
          value={termsToSearch.categoryId}
          onChange={setCategory}
        />
        {showBtnClear === true && (
          <BtnCustom onClick={clearTerms} customClass={"btnBorderBlack"}>
            Clear all
          </BtnCustom>
        )}
      </section>
      <hr />
      <section className={styles.productsSection}>
        {products.products.map((product, i: number) => (
          <ProductCard product={product} key={i} />
        ))}
      </section>
      {products.totalResults > 0 && (
        <section className={styles.paginationSection}>
          <PaginationMui
            totalPages={products.totalPages}
            page={products.currentPage}
            onChange={setPage}
          />
        </section>
      )}
    </section>
  );
}
