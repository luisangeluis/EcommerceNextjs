"use client";
//STYLES
import styles from "@/styles/home.module.scss";
//COMPONENTS
import ProductBrowser from "@/components/organisms/ProductBrowser/ProductBrowser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "@/store/slices/productsSlice";
import Loader from "@/components/molecules/Loader/Loader";
import GenreForm from "@/components/organisms/GenreForm/GenreForm";
import Products from "@/components/organisms/Products/Products";
import CustomPagination from "@/components/molecules/CustomPagination/CustomPagination";
import Backdrop from "@/components/atoms/Backdrop/Backdrop";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [termsToSearch, setTermsToSearch] = useState({});
  const [showButtonClear,setShowButtonClear] = useState();

  useEffect(() => {
    dispatch(getProducts(termsToSearch));
  }, [termsToSearch]);

  return (
    <section className={styles.productBrowser}>
      {products.isLoading && (
        <Backdrop customClass={"pFixed"}>
          <Loader />
        </Backdrop>
      )}
      <section>
        <ProductBrowser
          setTermsToSearch={setTermsToSearch}
          termsToSearch={termsToSearch}
        />
       
        <GenreForm
          setTermsToSearch={setTermsToSearch}
          termsToSearch={termsToSearch}
        />
      </section>
      {products.products.length > 0 && (
        <Products products={products.products} />
      )}
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
