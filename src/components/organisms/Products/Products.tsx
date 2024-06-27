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
import Pagination from "@/components/molecules/Pagination/Pagination";

const Products = () => {
  const products = useSelector((state) => state.products);
  const loadingErrorMessage = useSelector((state) => state.loadingErrorMessage);
  const dispatch = useDispatch();
  console.log("products");
  
  useEffect(() => {
    console.log("useefect");
    
    dispatch(getProducts());
  }, []);

  return (
    <section className={styles.productsContainer}>
      {loadingErrorMessage.isLoading  && <Loader />}
      {products.products.length < 1 && <Loader />}
      <section className={styles.products}>
        {products.products.length > 0 &&
          products.products.map((product: Product, i: number) => (
            <ProductCard product={product} key={i} />
          ))}
      </section>
      {products.totalPages && <Pagination totalPages={products.totalPages} />}
    </section>
  );
};

export default Products;
