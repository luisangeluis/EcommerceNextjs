import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import styles from "./PaymentBox.module.scss";
import SubTitle1 from "@/components/atoms/SubTitle1/SubTitle1";
import Title2 from "@/components/atoms/Title2/Title2";

const PaymentBox=({quantity,onClick})=>{
  return(
    <div className={styles.paymentBoxContainer}>
      <SubTitle1>Total: ${quantity}</SubTitle1>
      <BtnCustom customClass={"btnBorderBlack"} onClick={onClick}>
        Proceed to payment
      </BtnCustom>
    </div>
  )
}

export default PaymentBox;