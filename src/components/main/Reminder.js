import styles from "../../style/main.module.scss"

export default function Reminder(props) {
    return (
        <div className={`${styles.reminderContainer} p-1 col-12 col-sm-6 col-md-4 col-xxl-3 `}>
            <div className={`${styles.reminder} ${props.reminderColorClass ? props.reminderColorClass : styles.reminderColor1}`}>
                <h5 className={styles.reminderTitle}>Reminder title</h5>
                <p className={styles.reminderText}>
                    lorem ipsum dolor costam loerem ipsum fekas dsjad dsadsakds sadska
                </p>
            </div>
        </div>
)
}
