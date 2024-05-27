import styles from "./BtnRed.module.scss";

const BtnCustom = ({ onClick, children, customClass }) => {
  return (
    <button onClick={onClick} className={`btn ${customClass}`}>
      {children}
    </button>
  );
};

export default BtnCustom;
