"use client";

import { useEffect, useState } from "react";
import styles from "./CustomPagination.module.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CustomPagination = ({ totalPages, termsToSearch, setTermsToSearch }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page !== termsToSearch.page) {
      setTermsToSearch({ ...termsToSearch, page });
    }
    //setTermsToSearch({ ...termsToSearch, page });
  }, [page]);

  useEffect(() => {
    if (termsToSearch.page === 1) setPage(1);
  }, [termsToSearch]);

  const handleChange = (e, value) => {
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
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </section>
  );
};

export default CustomPagination;
