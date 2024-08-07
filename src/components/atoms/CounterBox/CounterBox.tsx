import styles from "./CounterBox.module.scss";
import {useState,useEffect} from "react";

const CounterBox = ({ value,onChange }) => {
  const [newValue, setNewValue] = useState();

  useEffect(() => {
    if(newValue)
     onChange(newValue);
  }, [newValue]);

  const incrementValue = () => setNewValue(value + 1);
  const decrementValue = () => setNewValue(value - 1);

  return(
    
  <section className={styles.counterBoxContainer}>
    <button onClick={decrementValue}>-</button>
    <p>{value}</p>
    <button onClick={incrementValue}>+</button>
  </section>
  );
};

export default CounterBox;
