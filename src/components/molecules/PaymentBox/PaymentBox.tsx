import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import styles from "./PaymentBox.module.scss";
import SubTitle1 from "@/components/atoms/SubTitle1/SubTitle1";

const PaymentBox=({quantity,onClick})=>{
  return(
    <div className={styles.paymentBoxContainer}>
      <p>Total: ${quantity}.00</p>
      <BtnCustom customClass={"btnFour"} onClick={onClick}>
        Proceed to payment
      </BtnCustom>
    </div>
  )
}

export default PaymentBox;