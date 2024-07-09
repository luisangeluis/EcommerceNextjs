"use client";
import { useSelector } from "react-redux";
//Styles
import styles from "./Alert.module.scss";

const Alert = ({ message }) => {
  return <section className={styles.alert}>{message}</section>;
};

export default Alert;
