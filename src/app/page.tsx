"use client";
import { useSelector } from "react-redux";
//TYPES
import type { Product } from "@/types";
//STYLES
import styles from "@/styles/home.module.scss";
//COMPONENTS
import Products from "@/components/organisms/Products/Products";
import ProductFinder from "@/components/molecules/ProductFinder/ProductFinder";
import Backdrop from "@/components/atoms/Backdrop/Backdrop";
import { CircularProgress } from "@mui/material";
import CustomPagination from "@/components/molecules/CustomPagination/CustomPagination";

export default async function Home() {
  const products = useSelector((state) => state.products);

  return (
    <section className={`${styles.homeContainer}`}>
      {/* {products.isLoading && (
        <Backdrop>
          <CircularProgress color="inherit" />
        </Backdrop>
      )} */}
      {/* <ProductFinder /> */}
      <Products products={products.products} />
      {products.totalPages > 0 && (
        <CustomPagination totalPages={products.totalPages} />
      )}
    </section>
  );
}
