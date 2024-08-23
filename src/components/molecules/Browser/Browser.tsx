import styles from "./Browser.module.scss";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import InputText from "@/components/atoms/InputText/InputText";

type BrowserProps = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  btnText: string;
  onClick: () => void;
  btnCustomClass: string;
};

const Browser = ({
  placeholder,
  value,
  onChange,
  btnText,
  onClick,
  btnCustomClass,
}: BrowserProps) => {
  
  return (
    <section className={styles.browserContainer}>
      <InputText placeholder={placeholder} value={value} onChange={onChange} />
      <BtnCustom onClick={onClick} customClass={btnCustomClass}>
        {btnText}
      </BtnCustom>
    </section>
  );
};

export default Browser;
