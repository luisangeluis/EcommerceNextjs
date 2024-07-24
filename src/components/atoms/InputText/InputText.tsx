import styles from "./InputText.module.scss";

const InputText = ({ placeholder, onChange, value }) => {
  return (
    <div className={styles.inputTextContainer}>
      <input
        className={styles.inputText}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputText;
