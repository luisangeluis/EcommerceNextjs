import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//STYLES
import styles from "./ProductInput.module.scss";
//COMPONENTS
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import { getProducts } from "@/store/slices/productsSlice";

const ProductInput = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [term, setTerm] = useState("");

  const handlerClick = () => {
    dispatch(getProducts({ productInfo: term }));
  };

  const handlerChange = (e) => {
    const term = e.target.value;
    setTerm(term);

    if (term === "" && products.products.length === 0) dispatch(getProducts());
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

export default ProductInput;
