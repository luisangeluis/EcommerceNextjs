import styles from "./CustomIcon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomIcon = ({ icon, iconClass }) => {
  return (
    
    <FontAwesomeIcon icon={icon} className={`${iconClass} ${styles.icon}`} />
  );
};

export default CustomIcon;
