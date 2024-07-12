"use client";
import { setProducts } from "@/store/slices/productsSlice";
//Styles
import styles from "./Alert.module.scss";
//Fontawesome
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

const Alert = ({ message }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setProducts({ message: "" }));

  return (
    <section className={styles.alert}>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faX} className="fa-solid fa-x" />
      </button>
      <p>{message}</p>
    </section>
  );
};

export default Alert;
