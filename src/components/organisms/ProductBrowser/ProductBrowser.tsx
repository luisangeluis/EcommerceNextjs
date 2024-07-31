import {useEffect, useState } from "react";
//STYLES
import styles from "./ProductBrowser.module.scss";
//COMPONENTS
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import InputText from "@/components/atoms/InputText/InputText";

const ProductBrowser = ({termsToSearch, setTermsToSearch }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!termsToSearch.productInfo) {
        setInputValue("");
    }
  }, [termsToSearch]);

  const handlerClick = () => {
    if (inputValue) {
      setTermsToSearch({productInfo: inputValue}); 
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <section className={styles.productBrowserContainter}>
      <InputText
        onChange={handleChange}
        placeholder={"Type a term"}
        value={inputValue}
      />
      <BtnCustom onClick={handlerClick} customClass={"btnBlack"}>
        Search
      </BtnCustom>
    </section>
  );
};

export default ProductBrowser;
