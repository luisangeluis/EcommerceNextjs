import { useEffect, useState } from "react";
//STYLES
import styles from "./ProductInput.module.scss";
//COMPONENTS
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import InputText from "@/components/atoms/InputText/InputText";

const ProductInput = ({ termsToSearch, setTermsToSearch }) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (!term) {
      setTermsToSearch({});
    }
  }, [term]);

  const handlerClick = () =>
    setTermsToSearch({ ...termsToSearch, productInfo: term });

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
  };

  return (
    <section className={styles.productFinderContainter}>
      <InputText
        placeholder={"Type a term"}
        onChange={handleChange}
        value={term}
      />
      <BtnCustom customClass={"btnBlack"} onClick={handlerClick}>
        Search
      </BtnCustom>
    </section>
  );
};

export default ProductInput;
