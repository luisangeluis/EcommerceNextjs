const Select = ({ options, onChange, defaultValue }) => {
  return (
    <select defaultValue={defaultValue} onChange={onChange}>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
