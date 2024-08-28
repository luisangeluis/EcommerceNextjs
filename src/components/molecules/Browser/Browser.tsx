import styles from "./Browser.module.scss";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import InputText from "@/components/atoms/InputText/InputText";
import { useState } from "react";

type BrowserProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  btnText: string;
  onClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  btnCustomClass: string;
};

const Browser = ({
  value,
  onChange,
  placeholder,
  btnText,
  onClick,
  btnCustomClass,
}: BrowserProps) => {
  return (
    <section className={styles.browserContainer}>
      <InputText placeholder={placeholder} value={value} onChange={onChange} />
      <BtnCustom onClick={() => onClick(value)} customClass={btnCustomClass}>
        {btnText}
      </BtnCustom>
    </section>
  );
};

export default Browser;
