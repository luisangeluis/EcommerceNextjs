import styles from "./BtnCustom.module.scss";

//Puedo meter todos los estilos que quiero que tenga o que podria tener este btn
//Siempre y cuando no cambie tanto el estilo

const BtnCustom = ({ onClick, children, customClass }) => {
  return (
    <div className={styles.btnCustomContainer}>
      <button
        onClick={onClick}
        className={`${styles.btn} ${styles[customClass]}`}
      >
        {children}
      </button>
    </div>
  );
};

export default BtnCustom;
