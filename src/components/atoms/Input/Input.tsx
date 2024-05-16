import styles from "./Input.module.scss";

const Input = ({ type, id, name, label, register, validations, errors }) => {
  return (
    <>
      <label
        htmlFor={id}
        className={`${styles.label} block text-center text-center md:text-left`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`${styles.input} ${
          errors[name] && styles.error
        } block w-full`}
        {...register(`${name}`, validations)}
      />
      <p className={`${styles.errorMessage}`}>{errors[name]?.message}</p>
    </>
  );
};

export default Input;
