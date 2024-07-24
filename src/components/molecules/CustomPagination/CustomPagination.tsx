"use client";

import { useEffect, useState } from "react";
import styles from "./CustomPagination.module.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch } from "react-redux";
import { getProducts } from "@/store/slices/productsSlice";

const CustomPagination = ({ totalPages }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) dispatch(getProducts({ page }));
  }, [page]);

  const handleChange = (e, value) => {
    console.log(value);
    setPage(value);
  };

  return (
    <section className={styles.paginationContainer}>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          size="large"
          onChange={handleChange}
          page={page}
          className={styles.pagination}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: ArrowBackIcon,
                next: ArrowForwardIcon,
              }}
              {...item}
            />
          )}
        />
      </Stack>
    </section>
  );
};

export default CustomPagination;
