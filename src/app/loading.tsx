import Backdrop from "@/components/atoms/Backdrop/Backdrop";
import Loader from "@/components/molecules/Loader/Loader";

const Loading = () => {
  return (
    <Backdrop customClass={"pFixed"}>
      <Loader />
    </Backdrop>
  );
};

export default Loading;
