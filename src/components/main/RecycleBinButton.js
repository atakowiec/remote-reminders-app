import styles from "../../style/main.module.scss";
import {motion} from "framer-motion";
import trashCanIcon from "../images/trash-can.png";

export default function RecycleBinButton(props) {
    return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`${styles.secondButton} ${styles.recycleBinButton} ${props.className}`}>
            <img src={trashCanIcon} alt={"trash can"} className={styles.trashCanIcon}/>
        </motion.button>
    );
}