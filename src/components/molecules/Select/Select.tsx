import styles from "./Select.module.scss";

const Select = ({ options, onChange, defaultValue }) => {
  return (
    <select
      defaultValue={defaultValue}
      onChange={onChange}
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
