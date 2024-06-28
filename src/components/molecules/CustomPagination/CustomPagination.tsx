"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CustomPagination.module.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { getProducts } from "@/store/slices/productsSlice";

const CustomPagination = ({ totalPages }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (e, value) => {
    console.log(value);
    setPage(value);
    dispatch(getProducts({ page: value }));
  };

  return (
    <section className={styles.paginationContainer}>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          size="large"
          onChange={handleChange}
          page={page}
        />
      </Stack>
    </section>
  );
};

export default CustomPagination;
