import { useEffect, useState } from "react";
//STYLES
import styles from "./ProductInput.module.scss";
//COMPONENTS
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";

const ProductInput = ({ termsToSearch, setTermsToSearch }) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (!term) {
      setTermsToSearch({});
    }
  }, [term]);

  const handlerClick = () =>
    setTermsToSearch({ ...termsToSearch, productInfo: term });

  const handlerChange = (e) => {
    const value = e.target.value;
    setTerm(value);
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
