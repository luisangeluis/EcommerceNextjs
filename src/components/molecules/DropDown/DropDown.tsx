import { useState } from "react";
import styles from "./DropDown.module.scss";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";

const DropDown = ({ name, onClick, customClass }) => {
  const [openList, setOpenList] = useState(false);

  return (
    <article className={styles.DropDownContainer}>
      <BtnCustom onClick={() => setOpenList(!openList)}>
        <p className={styles.title}>{`Hello ${name}`}</p>
      </BtnCustom>
      {openList && (
        <div className={styles.DropDownBody}>
          <ul className={styles.list}>
            <li>
              <BtnCustom onClick={onClick} customClass={`${customClass}`}>
                Log out
              </BtnCustom>
            </li>
            <li>opcion 2</li>
          </ul>
        </div>
      )}
    </article>
  );
};

export default DropDown;
