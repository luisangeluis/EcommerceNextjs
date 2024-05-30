import styles from "./BtnRed.module.scss";

//Puedo meter todos los estilos que quiero que tenga o que podria tener este btn
//Siempre y cuando no cambie tanto el estilo

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
