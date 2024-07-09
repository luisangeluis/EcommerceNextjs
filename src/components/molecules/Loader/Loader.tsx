import styles from "./Loader.module.scss";
//COMPONENTS
import { CircularProgress } from "@mui/material";
import Backdrop from "@/components/atoms/Backdrop/Backdrop";

const Loader = () => {
  return (
    <Backdrop>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
