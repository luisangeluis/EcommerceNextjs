import Stack from "@mui/material/Stack";
import styles from "./CustomPagination.module.scss";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PaginationMui = ({ totalPages, onChange, page }) => {
  return (
    <section className={styles.paginationMuiContainer}>
      <Stack spacing={2}>
        <Pagination
          className={styles.pagination}
          count={totalPages}
          size="large"
          onChange={onChange}
          page={page}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              className={styles.paginationItem}
              //size="large"
            />
          )}
        />
      </Stack>
    </section>
  );
};

export default PaginationMui;
