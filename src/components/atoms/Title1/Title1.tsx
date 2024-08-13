import styles from "./Title1.module.scss";

const Title1=({children})=>{
  return(
    <h1 className={styles.title1}>{children}</h1>
  )
}

export default Title1;