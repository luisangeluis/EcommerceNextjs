import { useEffect, useState } from "react";
import styles from "./Select.module.scss";

const Select = ({ options, quantity,updateItems }) => {
  const [value, setValue] = useState();

  
  useEffect(()=>{
    if(value)
      updateItems(value);
  },[value])
  
  const handleChange=(e)=>{
    const value = e.target.value;
    setValue(value);
  }

  
  return (
    <select
      value={quantity}
      onChange={handleChange}
      className={styles.select}
    >
      
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
