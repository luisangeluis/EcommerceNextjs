import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "@/store/slices/cartSlice";

//Styles
import styles from "./CartItem.module.scss";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//Components
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

  const handleDeleteClick = () => {
    const currentToken = localStorage.getItem("ecoUserToken");
    +!currentToken
      ? router.push("/login")
      : dispatch(deleteCartItem(currentToken, item.id));
  };

  const handleChange = (e) => {
    const currentToken = localStorage.getItem("ecoUserToken");

    const currentValue = e.target.value;

    if (
      currentValue >= 1 &&
      currentValue <= 10 &&
      currentToken !== null &&
      currentToken !== ""
    ) {
      dispatch(
        updateCartItem(currentToken, item.id, {
          quantity: Number(currentValue),
        }),
      );
    }
  };

  return (
    <article className={styles.item}>
      <div className={styles.itemHeader}>
        <button onClick={handleDeleteClick}>
          <FontAwesomeIcon icon={faTrash} className="fa fa-trash" />
        </button>
      </div>
      <div className={styles.itemBody}>
        <p>{item.product.title}</p>
        <p>${item.product.price}</p>
      </div>
      <div className={styles.itemFooter}>
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
