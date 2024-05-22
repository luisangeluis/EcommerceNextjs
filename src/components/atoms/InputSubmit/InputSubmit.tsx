import styles from "./InputSubmit.module.scss";

interface Submit {
  value: string;
}

const InputSubmit = ({ value }: Submit) => {
  return <input type="submit" value={value} className={`${styles.submit}`} />;
};

export default InputSubmit;
