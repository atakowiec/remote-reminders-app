import styles from "../../style/main.module.scss"
import AccentButton from "../global/AccentButton";
import RecycleBinButton from "./RecycleBinButton";
import Reminder from "./Reminder";

export default function RemindersList() {
    return (
        <main className={`${styles.content} ${styles.remindersBox} mt-3 col-11 col-md-7 mt-sm-5 mx-auto `}>
            <header className={styles.header+" d-block d-md-flex text-center text-md-start"}>
                <div className={"titles"}>
                    <h1 className={styles.title}>Welcome, Mateusz</h1>
                    <h5 className={styles.subtitle}>Here are your reminders ☺</h5>
                </div>
                <div className={"buttons ms-auto mt-4 mt-md-3 text-center "}>
                    <AccentButton text={"+ Create"}/>
                    <RecycleBinButton className={"ms-3"}/>
                </div>
            </header>
            <div className={styles.remindersList +" row m-0"}>
                <Reminder reminderColorClass={styles.reminderColor1} />
                <Reminder reminderColorClass={styles.reminderColor2} />
                <Reminder reminderColorClass={styles.reminderColor3} />
                <Reminder reminderColorClass={styles.reminderColor4} />
                <Reminder reminderColorClass={styles.reminderColor5} />
                <Reminder reminderColorClass={styles.reminderColor6} />
            </div>
        </main>
    );
}