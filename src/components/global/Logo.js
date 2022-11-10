import logo from "../images/reminder.png";
import styles from "../../style/global.module.scss";

export default function Logo(props) {
    return (
        <div className={`${styles.logoBox} ${props.className}`}>
            <img src={logo} alt={"logo"} className={`${styles.logoImage}`}/>
            {/*<a href="https://www.flaticon.com/free-icons/reminder" title="reminder icons">Reminder icons created by Darius Dan - Flaticon</a>*/}
            <span className={styles.logoText} style={{color: props.textColor}}>RemoteReminders</span>
        </div>);

}