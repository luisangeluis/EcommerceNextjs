import styles from "./SubTitle1.module.scss";

const SubTitle1 =({children})=>{
  return(
   <h5 className={styles.subTitle1}>{children}</h5>
  )
}

export default SubTitle1;