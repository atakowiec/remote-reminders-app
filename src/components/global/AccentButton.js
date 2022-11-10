import styles from "../../style/main.module.scss";
import {motion} from "framer-motion";

export default function AccentButton(props) {
    return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`${styles.button} ${props.className}`}>{props.text}</motion.button>
    );
}