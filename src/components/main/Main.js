import MainNavbar from "../global/MainNavbar";
import RemindersList from "./RemindersList";
import EmptyRemindersList from "./EmptyRemindersList";

export default function Main() {
    return (
    <>
        <MainNavbar />
        <RemindersList />
        <EmptyRemindersList />
    </>
);
}
