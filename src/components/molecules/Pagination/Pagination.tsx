"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({ totalPages }) => {
  let sections = Math.ceil(totalPages / 3);
  const btnSection = useRef(null);

  console.log({ btnSection });
  console.log(btnSection.current?.offsetWidth);
  useEffect(() => {}, []);

  return (
    <section className={styles.paginationContainer}>
      <p>{"<<"}&nbsp;&nbsp;&nbsp;</p>
      <p>&nbsp;&nbsp;{"<"}</p>
      <div className={styles.btnSection} ref={btnSection}>
        <div
          className={styles.btnGroup}
          style={{ width: btnSection.current?.offsetWidth * sections }}
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <div
              className={styles.btnContainer}
              key={i}
              style={{ width: btnSection.current?.offsetWidth / 3 }}
            >
              <button>{i + 1}</button>
            </div>
          ))}
        </div>
      </div>
      <p>{">"}&nbsp;&nbsp;</p>
      <p>&nbsp;&nbsp;&nbsp;{">>"}</p>
    </section>
  );
};

export default Pagination;
