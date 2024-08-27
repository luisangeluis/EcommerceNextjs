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
import ListMui from "@/components/molecules/ListMui/ListMui";
import BrowserProducts from "@/components/organisms/BrowserProducts/BrowserProducts";
import { getProducts } from "@/store/slices/productsSlice";
import getCategories from "@/utils/getCategories";
import ListMuiCategories from "@/components/organisms/ListMuiGenres/ListMuiCategories";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const termsToSearch = useSelector((state) => state.termsToSearch);
  const [genres, setGenres] = useState();
  const [selectedGenre, setSelectedGenre] = useState("");

  /*
  useEffect(() => {
    getCategories()
      .then((data) => setGenres(data.data))
      .catch((err) => console.log({ err }));
  }, []);
  */
  useEffect(() => {
    dispatch(getProducts(termsToSearch));
  }, [termsToSearch]);

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
        {/*
        <ListMui
          label="Genres"
          items={genres}
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        />*/}
      </section>
      <hr />
      {products.products.length > 0 ? (
        <Products products={products.products} />
      ) : (
        <h2>{products.message}</h2>
      )}

      {/*products.totalPages > 0 && (
        <CustomPagination
          totalPages={products.totalPages}
          termsToSearch={termsToSearch}
          setTermsToSearch={setTermsToSearch}
        />
      )*/}
    </section>
  );
}
