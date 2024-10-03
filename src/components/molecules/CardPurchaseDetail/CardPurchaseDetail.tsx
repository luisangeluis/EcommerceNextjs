import SubTitle2 from "@/components/atoms/SubTitle2/SubTitle2";
import styles from "./CardPurchaseDetail.module.scss";
import SubTitle1 from "@/components/atoms/SubTitle1/SubTitle1";

const CardPurchaseDetail = ({ purchaseDetail }) => {
  //console.log(purchaseDetail.createdAt);
  //console.log(new Date(purchaseDetail.createdAt));
  const date = new Date(purchaseDetail.createdAt);

  return (
    <article className={styles.CardPurchaseDetailContainer}>
      <div className={styles.header}>
        <p className="font-bold text-xl">Order number: {purchaseDetail.id}</p>
        <p>{`-- Created: ${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} --`}</p>
        <br />
      </div>
      <div className={styles.body}>
        {purchaseDetail.orderDetails.map((e) => {
          return (
            <div key={e.id}>
              <div className={styles.detail}>
                <p>Quantity: {e.quantity}</p>
                <p>Price: {e.price}</p>
                <SubTitle2>Subtotal: {e.subtotal}</SubTitle2>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className={styles.footer}></div>
    </article>
  );
};

export default CardPurchaseDetail;
