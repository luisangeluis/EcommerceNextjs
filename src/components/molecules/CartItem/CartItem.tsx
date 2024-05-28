import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "@/store/slices/cartSlice";
// import useGetToken from "@/hooks/useGetToken";
import styles from "./CartItem.module.scss";
import Select from "@/components/molecules/Select/Select";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const productQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CartItem = ({ item }) => {
  const router = useRouter();
  const userToken = useSelector((state) => state.userToken);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    setQuantity(item.quantity);
  }, []);

  const handlerDeleteClick = () => {
    !userToken
      ? router.push("/user/login")
      : dispatch(deleteCartItem(userToken, item.id));
  };

  const handleChange = (e) => {
    const currentValue = e.target.value;

    if (currentValue >= 1 && currentValue <= 10) {
      dispatch(
        updateCartItem(userToken, item.id, { quantity: Number(currentValue) }),
      );
    }
    // setQuantity(e.target.value);
  };

  return (
    <article className={styles.item}>
      <div className={styles.itemHeader}>
        {/* {loading && <p>Loading...</p>} */}
        <button onClick={handlerDeleteClick}>Delete</button>
      </div>
      <div className={styles.itemBody}>
        <p>{item.product.title}</p>
        {/* <h3>Quantity: {item.quantity}</h3> */}
        <p>Unit price: ${item.product.price}</p>
      </div>
      <div className={styles.itemFooter}>
        <p>Quantity</p>
        <Select
          options={productQuantity}
          onChange={handleChange}
          defaultValue={item.quantity}
        />
      </div>
    </article>
  );
};

export default CartItem;
