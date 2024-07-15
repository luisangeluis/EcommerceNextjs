"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setProducts } from "@/store/slices/productsSlice";
//STYLES
import styles from "@/styles/home.module.scss";
//COMPONENTS
import Products from "@/components/organisms/Products/Products";
import ProductFinder from "@/components/molecules/ProductFinder/ProductFinder";
import CustomPagination from "@/components/molecules/CustomPagination/CustomPagination";
import Loader from "@/components/molecules/Loader/Loader";
import Alert from "@/components/molecules/Alert/Alert";
import Backdrop from "@/components/atoms/Backdrop/Backdrop";

export default function Home() {
  const products = useSelector((state) => state.products);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <section className={`${styles.homeContainer}`}>
      {products.isLoading && (
        <Backdrop customClass={"pFixed"}>
          <Loader />
        </Backdrop>
      )}
      {products.message && <Alert message={products.message} />}
      <ProductFinder />
      {products.products.length > 0 && (
        <Products products={products.products} />
      )}
      {products.totalPages > 0 && (
        <CustomPagination totalPages={products.totalPages} />
      )}
    </section>
  );
}
