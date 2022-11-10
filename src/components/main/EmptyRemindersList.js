import styles from "../../style/main.module.scss"
import AccentButton from "../global/AccentButton";
import RecycleBinButton from "./RecycleBinButton";

export default function EmptyRemindersList() {
    return (
        <main className={`${styles.content} ${styles.noRemindersContent} text-center mt-3 mt-md-5 mx-auto col-11 col-md-5 col-lg-4 col-xxl-3`}>
            <h1 className={styles.title}>Welcome, Mateusz</h1>
            <h5 className={styles.subtitle}>You don't have any reminders ☺</h5>
            <h5 className={`${styles.subtitle} mt-5`}>So you can create new one!</h5>
            <AccentButton className={"mt-3"} text={"+  Create"}/>
            <RecycleBinButton className={"ms-3 mb-4"}/>
        </main>
    );
}