import { useEffect, useState } from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({ totalPages }) => {
  const [totalGroups, setTotalGroups] = useState(0);
  const pagesPerGroup = 3;
  console.log({totalPages});
  console.log({totalGroups});
  
  useEffect(() => {
    setTotalGroups(Math.ceil(totalPages / pagesPerGroup));
    // createGroups();
  }, []);

  // const createGroups = () => {
  //   const groups = [];

  //   let sum = 0;
  //   let resto = 0;
  //   do {
  //     groups.push(pagesPerGroup);

  //     sum = groups.reduce((accum, current) => accum + current, 0);

  //     if (sum >= totalPages) {
  //       resto = sum - totalPages;
  //       groups.splice(-1, 1, resto);
  //     }
  //   } while (sum <= totalPages);

  //   console.log({ sum });
  //   console.log({ resto });
  //   console.log(groups);
  // };

  return (
    <section className={styles.paginationContainer}>
      <h3>Pagination</h3>
    </section>
  );
};

export default Pagination;
