"use client";
//Styles
import styles from "./Alert.module.scss";
//Fontawesome
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

const Alert = ({ message }) => {
  const dispatch = useDispatch();
  // const handleClick=()=>dispatch

  return (
    <section className={styles.alert}>
      <button>
        <FontAwesomeIcon icon={faX} className="fa-solid fa-x" />
      </button>
      <p>{message}</p>
    </section>
  );
};

export default Alert;
