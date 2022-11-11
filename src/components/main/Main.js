import MainNavbar from "../global/MainNavbar";
import RemindersList from "./RemindersList";
import EmptyRemindersList from "./EmptyRemindersList";
import {useEffect} from "react";

export default function Main(props) {
    useEffect(() => {
        document.title = "Your reminders - RemoteRemindersApp"

        if(!props.loggedUser) {
            window.location.href = "/login"
        }
    }, [])

    return (
    <>
        <MainNavbar />
        <RemindersList />
        <EmptyRemindersList />
    </>
);
}
