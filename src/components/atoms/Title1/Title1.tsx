import styles from "./Title1.module.scss";

const Title1=(title:string)=>{
  return(
    <h1 className={styles.title1}>{title}</h1>
  )
}

export default Title1;