"use client";
import { useSelector } from "react-redux";
//Styles
import styles from "./Alert.module.scss";

const Alert = () => {
  const alert = useSelector((state) => state.alert);
  // console.log(alert);

  if (!alert) return null;

  return <section className={styles.alert}>{alert}</section>;
};

export default Alert;
