"use client";
//STYLES
import { useDispatch } from "react-redux";
import styles from "./ProductFinder.module.scss";
//COMPONENTS
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";

const ProductFinder = () => {
  const dispatch = useDispatch();

  return (
    <section className={styles.productFinderContainter}>
      <input
        type="text"
        placeholder="Type a product name"
        className={styles.input}
      />
      <BtnCustom>Search</BtnCustom>
    </section>
  );
};

export default ProductFinder;
