"use client";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
//STYLES
import styles from "./ProductFinder.module.scss";
//COMPONENTS
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import { getProducts } from "@/store/slices/productsSlice";

const ProductFinder = () => {
  //TODO yo cre
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const [value, setValue] = useState("");

  const handlerClick = () => {
    setvalue(inputRef.current.value);
    dispatch(getProducts({ productInfo: value }));
  };

  // const onChange;

  return (
    <section className={styles.productFinderContainter}>
      <div>
        <input
          type="text"
          placeholder="Type a product name"
          className={styles.input}
          ref={inputRef}
          value={value}
        />
      </div>
      <BtnCustom customClass={"btnBlack"} onClick={handlerClick}>
        Search
      </BtnCustom>
    </section>
  );
};

export default ProductFinder;
