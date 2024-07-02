"use client";
//STYLES
import { useDispatch } from "react-redux";
import styles from "./ProductFinder.module.scss";
//COMPONENTS
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";

const ProductFinder = () => {
  const dispatch = useDispatch();

  const handlerClick = () => console.log("click");

  return (
    <section className={styles.productFinderContainter}>
      <div>
        <input
          type="text"
          placeholder="Type a product name"
          className={styles.input}
        />
      </div>
      <BtnCustom customClass={"btnBlack"} onClick={handlerClick}>
        Search
      </BtnCustom>
    </section>
  );
};

export default ProductFinder;
