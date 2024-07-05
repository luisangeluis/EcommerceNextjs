import { useState } from "react";
import { useDispatch } from "react-redux";
//STYLES
import styles from "./ProductFinder.module.scss";
//COMPONENTS
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import { getProducts } from "@/store/slices/productsSlice";

const ProductFinder = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(getProducts({ productInfo: term }));
  };

  const handlerChange = (e) => {
    const term = e.target.value;
    setTerm(term);

    if (term === "") dispatch(getProducts());
  };

  return (
    <section className={styles.productFinderContainter}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type a product name"
          className={styles.input}
          value={term}
          onChange={handlerChange}
        />
      </div>
      <BtnCustom customClass={"btnBlack"} onClick={handlerClick}>
        Search
      </BtnCustom>
    </section>
  );
};

export default ProductFinder;
