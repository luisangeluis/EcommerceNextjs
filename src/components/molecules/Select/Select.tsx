import { useEffect, useState } from "react";
import styles from "./Select.module.scss";

const Select = ({ options, updateItems,quantity }) => {
  const [value,setValue]=useState(quantity);

  useEffect(()=>{
      updateItems(value);
  },[value])
  
  const handleChange=(e)=>{
    const value = e.target.value;
    setValue(value);
    
  }

  
  return (
    <select
      value={value}
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
