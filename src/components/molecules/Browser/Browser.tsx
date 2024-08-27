import styles from "./Browser.module.scss";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import InputText from "@/components/atoms/InputText/InputText";
import { useState } from "react";

type BrowserProps = {
  placeholder: string;
  btnText: string;
  onClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  btnCustomClass: string;
};

const Browser = ({
  placeholder,
  btnText,
  onClick,
  btnCustomClass,
}: BrowserProps) => {
  const [value,setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  
  console.log("browser")
  return (
    <section className={styles.browserContainer}>
      <InputText placeholder={placeholder} value={value} onChange={handleChange} />
      <BtnCustom onClick={()=>onClick(value)} customClass={btnCustomClass}>
        {btnText}
      </BtnCustom>
    </section>
  );
};

export default Browser;
