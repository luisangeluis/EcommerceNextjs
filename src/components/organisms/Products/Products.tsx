"use client";

import { useEffect } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/store/slices/productsSlice";

// types
import { Product } from "@/types";

//Styles
import styles from "./Products.module.scss";

//Components
import ProductCard from "@/components/molecules/ProductCard/ProductCard";
import Loader from "@/components/molecules/Loader/Loader";
import CustomPagination from "@/components/molecules/CustomPagination/CustomPagination";

const Products = () => {
  const products = useSelector((state) => state.products);
  const loadingErrorMessage = useSelector((state) => state.loadingErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handlerClick = () => console.log("click");

  return (
    <section className={styles.productsContainer}>
      {loadingErrorMessage.isLoading === true && <Loader />}
      {/* {products.products.length < 1 && <Loader />} */}
      <section className={styles.products}>
        {products.products.length > 0 &&
          products.products.map((product: Product, i: number) => (
            <ProductCard product={product} key={i} />
          ))}
      </section>
      {products.totalPages > 0 && (
        <CustomPagination totalPages={products.totalPages} />
      )}
    </section>
  );
};

export default Products;
