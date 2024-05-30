import styles from "./BtnRed.module.scss";

const BtnCustom = ({ onClick, children, customClass }) => {
  return (
    <div>
      <button onClick={onClick} className={`btn ${customClass}`}>
        {children}
      </button>
    </div>
  );
};

export default BtnCustom;
