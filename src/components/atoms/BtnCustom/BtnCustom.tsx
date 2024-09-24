import styles from "./BtnCustom.module.scss";

//Puedo meter todos los estilos que quiero que tenga o que podria tener este btn
//Siempre y cuando no cambie tanto el estilo

const BtnCustom = ({children,onClick, customClass,disabled }) => {
  return (
    <div className={styles.btnCustomContainer}>
      <button
        onClick={onClick}
        className={`${styles.btn} ${styles[customClass]}`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default BtnCustom;
