import styles from "../../style/main.module.scss"
import AccentButton from "../global/AccentButton";
import RecycleBinButton from "./RecycleBinButton";

export default function RemindersList() {
    return (
        <main className={`${styles.content} ${styles.remindersBox} mt-3 mt-md-5 mx-auto col-7 `}>
            <header className={styles.header+" d-block d-md-flex"}>
                <div className={"titles"}>
                    <h1 className={styles.title}>Welcome, Mateusz</h1>
                    <h5 className={styles.subtitle}>Here are your reminders ☺</h5>
                </div>
                <div className={"buttons ms-auto mt-3 text-center "}>
                    <AccentButton text={"+ Create"}/>
                    <RecycleBinButton className={"ms-3"}/>
                </div>
            </header>
        </main>
    );
}