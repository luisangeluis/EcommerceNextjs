import { useState } from "react";
import styles from "./DropDown.module.scss";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";

const DropDown = ({ name }) => {
  const [openList, setOpenList] = useState(false);

  return (
    <article className={styles.DropDownContainer}>
      <BtnCustom onClick={() => setOpenList(!openList)}>
        <p className={styles.title}>{`Hello ${name}`}</p>
      </BtnCustom>
      {openList && (
        <div className={styles.DropDownBody}>
          <ul>Lista</ul>
        </div>
      )}
    </article>
  );
};

export default DropDown;
