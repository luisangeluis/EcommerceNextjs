import styles from "./CartItemDetail.module.scss";

const CartItemDetail = ({ cartItemDetail }) => {
  return (
    <article className={styles.CartItemDetail}>
      <div className={styles.body}>
        <div>
          <h3>{cartItemDetail.product.title}</h3>
          <p>{cartItemDetail.product.description}</p>
        </div>
        <div>
          <h4>Price: ${cartItemDetail.product.price}</h4>
          <p>Quantity: {cartItemDetail.quantity}</p>
        </div>
      </div>
    </article>
  );
};

export default CartItemDetail;
